/**
 * MobileServicesCarousel - A horizontal scroll-driven coverflow carousel for mobile devices
 *
 * This component creates an Apple-style coverflow carousel that responds to vertical scrolling.
 * As the user scrolls down the page, the carousel moves horizontally through the service cards,
 * applying 3D rotation and scale effects to create depth.
 *
 * ## How It Works
 *
 * 1. **Scroll Hijacking (Pinning)**
 *    - When the section reaches 50px from the top of the viewport, ScrollTrigger "pins" it
 *    - The section stays fixed while the user continues scrolling
 *    - Vertical scroll progress is mapped to horizontal carousel movement
 *
 * 2. **Dead Zones**
 *    - Extra scroll distance at the start and end where no card movement occurs
 *    - Gives users time to see the first/last card before transitioning
 *    - Configured via DEAD_ZONE_PIXELS constant
 *
 * 3. **Coverflow Effect**
 *    - Active card: scale 1.0, opacity 1.0, no rotation
 *    - Inactive cards: scale 0.65, opacity 0.7, rotated ±12° on Y-axis
 *    - Smooth interpolation between states based on scroll progress
 *
 * 4. **Page Refresh Fix**
 *    - Browser scroll restoration can cause positioning bugs with ScrollTrigger pinning
 *    - Fixed by: (1) Disabling scroll restoration in index.html before React loads
 *              (2) Clearing ScrollTrigger memory and forcing refresh after initialization
 *
 * @see index.html - Contains inline script to disable scroll restoration early
 */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// =============================================================================
// Configuration Constants
// =============================================================================

/** Extra scroll distance (in pixels) at start and end where cards don't move */
const DEAD_ZONE_PIXELS = 300;

/** Horizontal padding added to scroll distance calculation */
const TRACK_PADDING = 32;

/** Distance from viewport top where pinning begins */
const PIN_START_OFFSET = "50px";

/** Smoothness of scroll-to-animation coupling (higher = smoother but more lag) */
const SCRUB_SMOOTHNESS = 1.5;

/** Duration for card transform animations */
const CARD_ANIMATION_DURATION = 0.3;

/** Duration for section transition animations */
const SECTION_TRANSITION_DURATION = 0.5;

// Coverflow effect values
const COVERFLOW = {
  /** Maximum Y-axis rotation in degrees */
  MAX_ROTATION: 12,
  /** Minimum scale for inactive cards (1 - this value) */
  SCALE_REDUCTION: 0.35,
  /** Minimum opacity for inactive cards (1 - this value) */
  OPACITY_REDUCTION: 0.3,
  /** Scale for fully inactive cards */
  INACTIVE_SCALE: 0.65,
  /** Opacity for fully inactive cards */
  INACTIVE_OPACITY: 0.7,
} as const;

// =============================================================================
// Types
// =============================================================================

interface Service {
  title: string;
  description: string;
  link: string;
  image: string;
  anchorText?: string;
}

interface MobileServicesCarouselProps {
  services: Service[];
}

// =============================================================================
// Component
// =============================================================================

const MobileServicesCarousel = ({ services }: MobileServicesCarouselProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    // Use GSAP's matchMedia for responsive behavior - only activate on mobile
    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      // =========================================================================
      // ScrollTrigger Initialization & Page Refresh Fix
      // =========================================================================
      // Kill any existing ScrollTriggers for this section to prevent duplicates
      // This can happen during hot module replacement or React strict mode
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === section) {
          st.kill();
        }
      });

      // Clear cached scroll positions from previous sessions
      // This fixes positioning bugs when the page is refreshed while scrolled
      ScrollTrigger.clearScrollMemory();

      // Disable GSAP's scroll normalization to prevent conflicts with native scrolling
      ScrollTrigger.normalizeScroll(false);

      // Schedule a refresh after the browser has finished any scroll restoration
      // and the layout has fully settled. The 200ms delay ensures:
      // 1. Browser scroll restoration (if any leaked through) is complete
      // 2. React has finished rendering
      // 3. Images and fonts have started loading (affecting layout)
      // 4. Safari's delayed scroll restoration has completed
      const refreshTimeout = setTimeout(() => {
        // Force scroll to top again for Safari which may restore scroll late
        window.scrollTo(0, 0);
        ScrollTrigger.refresh(true);
      }, 200);

      // =========================================================================
      // Calculate Scroll Distances
      // =========================================================================
      const scrollWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;

      // How far the track needs to move to show all cards
      const scrollDistance = scrollWidth - viewportWidth + TRACK_PADDING;

      // Total scroll distance including dead zones at both ends
      const totalScrollDistance = scrollDistance + DEAD_ZONE_PIXELS * 2;

      // Calculate progress thresholds for dead zones (0-1 range)
      const startDeadZoneProgress = DEAD_ZONE_PIXELS / totalScrollDistance;
      const endDeadZoneProgress = 1 - DEAD_ZONE_PIXELS / totalScrollDistance;

      const totalCards = services.length;

      // =========================================================================
      // Set Initial Card States
      // =========================================================================
      // All cards except the first start in their "inactive" state
      cardsRef.current.forEach((card, index) => {
        if (card && index !== 0) {
          gsap.set(card, {
            scale: COVERFLOW.INACTIVE_SCALE,
            opacity: COVERFLOW.INACTIVE_OPACITY,
            rotateY: -COVERFLOW.MAX_ROTATION,
          });
        }
      });

      // =========================================================================
      // Create ScrollTrigger Animation
      // =========================================================================
      const tween = gsap.to(track, {
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: `top ${PIN_START_OFFSET}`,
          // Scroll distance multiplied by 2 for comfortable scrolling speed
          end: () => `+=${totalScrollDistance * 2}`,
          scrub: SCRUB_SMOOTHNESS,
          pin: true,
          pinSpacing: true,
          // Anticipate the pin to prevent visual jumping
          anticipatePin: 1,
          // Higher priority ensures this trigger refreshes before others
          refreshPriority: 1,
          // Recalculate on window resize
          invalidateOnRefresh: true,

          /**
           * Main animation update - runs on every scroll frame
           * Maps vertical scroll progress to horizontal track position and card transforms
           */
          onUpdate: (self) => {
            const progress = self.progress;

            // Calculate effective progress accounting for dead zones
            // Dead zones: scroll happens but cards don't move
            let effectiveProgress: number;
            if (progress <= startDeadZoneProgress) {
              // Start dead zone - stay on first card
              effectiveProgress = 0;
            } else if (progress >= endDeadZoneProgress) {
              // End dead zone - stay on last card
              effectiveProgress = 1;
            } else {
              // Active zone - linear interpolation between dead zones
              effectiveProgress =
                (progress - startDeadZoneProgress) /
                (endDeadZoneProgress - startDeadZoneProgress);
            }

            // Move track horizontally based on effective progress
            const xPosition = -scrollDistance * effectiveProgress;
            gsap.set(track, { x: xPosition });

            // Apply coverflow effect to each card
            cardsRef.current.forEach((card, index) => {
              if (!card) return;

              // Calculate how far this card is from being "active"
              // 0 = active, ±1 = one card away, etc.
              const cardProgress = index / (totalCards - 1);
              const continuousDistance =
                (effectiveProgress - cardProgress) * (totalCards - 1);
              const absDistance = Math.min(Math.abs(continuousDistance), 1);

              // Calculate transform values with smooth interpolation
              // Rotation: cards to the left rotate positive, cards to the right rotate negative
              const rotateY = Math.max(
                -COVERFLOW.MAX_ROTATION,
                Math.min(
                  COVERFLOW.MAX_ROTATION,
                  continuousDistance * -COVERFLOW.MAX_ROTATION
                )
              );

              // Scale: 1.0 when active, down to 0.65 when inactive
              const scale = 1 - absDistance * COVERFLOW.SCALE_REDUCTION;

              // Opacity: 1.0 when active, down to 0.7 when inactive
              const opacity = 1 - absDistance * COVERFLOW.OPACITY_REDUCTION;

              gsap.to(card, {
                scale,
                opacity,
                rotateY,
                duration: CARD_ANIMATION_DURATION,
                ease: "power2.out",
                overwrite: "auto",
              });
            });
          },

          /**
           * When scrolling past the carousel section
           * Smoothly scroll to the next section
           */
          onLeave: () => {
            const nextSection = section.nextElementSibling as HTMLElement;
            if (nextSection) {
              gsap.to(window, {
                scrollTo: { y: nextSection, offsetY: 50 },
                duration: 0.8,
                ease: "power2.out",
              });
            }
          },

          /**
           * When scrolling back into the section from below
           * Reset cards to show the last card as active
           */
          onEnterBack: () => {
            const lastIndex = services.length - 1;
            cardsRef.current.forEach((card, index) => {
              if (!card) return;
              const isActive = index === lastIndex;
              // Cards before the last one should rotate in the opposite direction
              const rotateY = isActive
                ? 0
                : index < lastIndex
                  ? COVERFLOW.MAX_ROTATION
                  : 0;
              gsap.to(card, {
                scale: isActive ? 1 : COVERFLOW.INACTIVE_SCALE,
                opacity: isActive ? 1 : COVERFLOW.INACTIVE_OPACITY,
                rotateY,
                duration: SECTION_TRANSITION_DURATION,
                ease: "power3.out",
              });
            });
          },

          /**
           * When scrolling back out of the section (upward)
           * Reset cards to show the first card as active
           */
          onLeaveBack: () => {
            cardsRef.current.forEach((card, index) => {
              if (!card) return;
              const isActive = index === 0;
              const rotateY = isActive ? 0 : -COVERFLOW.MAX_ROTATION;
              gsap.to(card, {
                scale: isActive ? 1 : COVERFLOW.INACTIVE_SCALE,
                opacity: isActive ? 1 : COVERFLOW.INACTIVE_OPACITY,
                rotateY,
                duration: SECTION_TRANSITION_DURATION,
                ease: "power3.out",
              });
            });
          },
        },
      });

      // =========================================================================
      // Cleanup Function
      // =========================================================================
      return () => {
        clearTimeout(refreshTimeout);
        tween.kill();

        // Reset all card transforms to default
        cardsRef.current.forEach((card) => {
          if (card) {
            gsap.set(card, { scale: 1, opacity: 1, rotateY: 0 });
          }
        });

        // Kill any ScrollTriggers associated with this section
        ScrollTrigger.getAll().forEach((st) => {
          if (st.vars.trigger === section) {
            st.kill();
          }
        });
      };
    });

    // Cleanup matchMedia on component unmount
    return () => {
      mm.revert();
    };
  }, [services]);

  // ===========================================================================
  // Render
  // ===========================================================================
  return (
    <div
      ref={sectionRef}
      className="services-pin md:hidden relative overflow-x-hidden"
    >
      {/*
        Track container - holds all cards in a horizontal row
        perspective/perspectiveOrigin enable 3D transforms for coverflow effect
      */}
      <div
        ref={trackRef}
        className="track flex gap-4 px-4 pt-4 pb-8 items-center"
        style={{
          width: "max-content",
          perspective: "1000px",
          perspectiveOrigin: "center center",
        }}
      >
        {services.map((service, index) => (
          <Link
            key={service.link}
            ref={(el) => (cardsRef.current[index] = el)}
            to={service.link}
            className="service-card flex-shrink-0 origin-center"
            style={{
              width: "80vw",
              maxWidth: "420px",
              transformStyle: "preserve-3d",
            }}
          >
            <Card className="hover:shadow-lg transition-shadow border-primary/20 hover:border-primary/40 overflow-hidden group relative h-[75vh]">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />
              {/* Card content */}
              <CardContent className="p-6 pb-[100px] relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-white/90 mb-4">{service.description}</p>
                <div className="flex items-center text-accent font-medium">
                  {service.anchorText ||
                    `Detalii ${service.title.toLowerCase()}`}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileServicesCarousel;
