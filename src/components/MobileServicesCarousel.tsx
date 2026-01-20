import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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

const MobileServicesCarousel = ({ services }: MobileServicesCarouselProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    // Only apply on mobile (< 768px)
    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      const scrollWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = scrollWidth - viewportWidth + 32; // 32px for padding

      // Dead zone - extra scroll distance where first card stays visible
      const deadZonePixels = 200;
      const totalScrollDistance = scrollDistance + deadZonePixels;
      const deadZoneProgress = deadZonePixels / totalScrollDistance;

      const totalCards = services.length;
      
      // Generate precise snap points with dead zone offset
      const snapPoints: number[] = [0]; // First card at 0 (within dead zone)
      for (let i = 1; i < totalCards; i++) {
        const normalizedPosition = deadZoneProgress + (i / (totalCards - 1)) * (1 - deadZoneProgress);
        snapPoints.push(Math.min(1, normalizedPosition));
      }

      // Set initial scale for all cards except the first
      cardsRef.current.forEach((card, index) => {
        if (card && index !== 0) {
          gsap.set(card, { scale: 0.85, opacity: 0.7 });
        }
      });

      const tween = gsap.to(track, {
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 50px",
          end: () => `+=${totalScrollDistance * 2}`,
          scrub: 1.5,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          refreshPriority: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: (progress) => {
              // Find closest snap point
              let closest = snapPoints[0];
              let minDist = Math.abs(progress - closest);
              
              for (let i = 1; i < snapPoints.length; i++) {
                const dist = Math.abs(progress - snapPoints[i]);
                if (dist < minDist) {
                  minDist = dist;
                  closest = snapPoints[i];
                }
              }
              return closest;
            },
            duration: { min: 0.2, max: 0.4 },
            delay: 0.05,
            ease: "power1.inOut"
          },
          onUpdate: (self) => {
            const progress = self.progress;
            
            // Calculate effective progress (skip dead zone)
            const effectiveProgress = progress <= deadZoneProgress 
              ? 0 
              : (progress - deadZoneProgress) / (1 - deadZoneProgress);
            
            // Move track only after dead zone
            const xPosition = -scrollDistance * effectiveProgress;
            gsap.set(track, { x: xPosition });
            
            const activeIndex = progress <= deadZoneProgress 
              ? 0 
              : Math.round(effectiveProgress * (totalCards - 1));

            // Scale effect on cards
            cardsRef.current.forEach((card, index) => {
              if (!card) return;
              
              const distance = Math.abs(index - activeIndex);
              const scale = distance === 0 ? 1 : 0.85;
              const opacity = distance === 0 ? 1 : 0.7;
              
              gsap.to(card, {
                scale,
                opacity,
                duration: 0.3,
                ease: "power2.out"
              });
            });

            // Parallax effect on images
            imagesRef.current.forEach((img, index) => {
              if (!img) return;
              
              const cardProgress = index / (totalCards - 1);
              let offset = (effectiveProgress - cardProgress) * 30;
              
              // Clamp pentru a evita sărituri
              offset = Math.max(-30, Math.min(30, offset));
              
              // Reduce când cardul e activ
              if (index === activeIndex) {
                offset = offset * 0.3;
              }
              
              gsap.to(img, {
                y: offset,
                duration: 0.2,
                ease: "power1.out"
              });
            });
          },
          onLeave: () => {
            const nextSection = section.nextElementSibling as HTMLElement;
            if (nextSection) {
              gsap.to(window, {
                scrollTo: { y: nextSection, offsetY: 50 },
                duration: 0.8,
                ease: "power2.out"
              });
            }
          },
          onEnterBack: () => {
            // Resetare la ultima poziție când revenim în secțiune
            const lastIndex = services.length - 1;
            cardsRef.current.forEach((card, index) => {
              if (!card) return;
              const isActive = index === lastIndex;
              gsap.to(card, {
                scale: isActive ? 1 : 0.85,
                opacity: isActive ? 1 : 0.7,
                duration: 0.3,
                ease: "power2.out"
              });
            });
          },
          onLeaveBack: () => {
            // Resetare la prima poziție când ieșim înapoi din secțiune
            cardsRef.current.forEach((card, index) => {
              if (!card) return;
              const isActive = index === 0;
              gsap.to(card, {
                scale: isActive ? 1 : 0.85,
                opacity: isActive ? 1 : 0.7,
                duration: 0.3,
                ease: "power2.out"
              });
            });
          }
        },
      });

      return () => {
        tween.kill();
        // Resetare scale și opacity la valori implicite
        cardsRef.current.forEach((card) => {
          if (card) {
            gsap.set(card, { scale: 1, opacity: 1 });
          }
        });
        imagesRef.current.forEach((img) => {
          if (img) {
            gsap.set(img, { y: 0 });
          }
        });
        ScrollTrigger.getAll().forEach((st) => {
          if (st.vars.trigger === section) {
            st.kill();
          }
        });
      };
    });

    return () => {
      mm.revert();
    };
  }, [services]);

  return (
    <div ref={sectionRef} className="services-pin md:hidden relative overflow-x-hidden">
      <div
        ref={trackRef}
        className="track flex gap-4 px-4 pt-4 pb-8 items-center"
        style={{ width: "max-content" }}
      >
        {services.map((service, index) => (
          <Link
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            to={service.link}
            className="service-card flex-shrink-0 origin-center transition-transform"
            style={{ width: "80vw", maxWidth: "420px" }}
          >
            <Card className="hover:shadow-lg transition-shadow border-primary/20 hover:border-primary/40 overflow-hidden group relative h-[75vh]">
              <div
                ref={(el) => (imagesRef.current[index] = el)}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />
              <CardContent className="p-6 pb-[100px] relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-white/90 mb-4">{service.description}</p>
                <div className="flex items-center text-accent font-medium">
                  {service.anchorText || `Detalii ${service.title.toLowerCase()}`}
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
