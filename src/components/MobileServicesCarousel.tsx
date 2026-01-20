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

      // Dead zones - extra scroll distance at start and end
      const deadZonePixels = 300;
      const totalScrollDistance = scrollDistance + (deadZonePixels * 2); // Dead zone at both ends
      const startDeadZoneProgress = deadZonePixels / totalScrollDistance;
      const endDeadZoneProgress = 1 - (deadZonePixels / totalScrollDistance);

      const totalCards = services.length;
      
      // Generate precise snap points with dead zone offset
      const snapPoints: number[] = [0]; // First card at 0 (within dead zone)
      for (let i = 1; i < totalCards; i++) {
        const normalizedPosition = startDeadZoneProgress + (i / (totalCards - 1)) * (endDeadZoneProgress - startDeadZoneProgress);
        snapPoints.push(Math.min(1, normalizedPosition));
      }

      // Set initial scale and rotation for all cards except the first
      cardsRef.current.forEach((card, index) => {
        if (card && index !== 0) {
          gsap.set(card, { scale: 0.75, opacity: 0.7, rotateY: -12 });
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
          // snap disabled
          onUpdate: (self) => {
            const progress = self.progress;
            
            // Calculate effective progress with dead zones at start and end
            let effectiveProgress: number;
            if (progress <= startDeadZoneProgress) {
              // Dead zone la început - rămâne pe primul card
              effectiveProgress = 0;
            } else if (progress >= endDeadZoneProgress) {
              // Dead zone la final - rămâne pe ultimul card
              effectiveProgress = 1;
            } else {
              // Zona activă - progres liniar între cele două dead zones
              effectiveProgress = (progress - startDeadZoneProgress) / (endDeadZoneProgress - startDeadZoneProgress);
            }
            
            // Move track based on effective progress
            const xPosition = -scrollDistance * effectiveProgress;
            gsap.set(track, { x: xPosition });
            
            const activeIndex = progress <= startDeadZoneProgress 
              ? 0 
              : progress >= endDeadZoneProgress 
                ? totalCards - 1 
                : Math.round(effectiveProgress * (totalCards - 1));

            // Scale and 3D rotation effect on cards (Coverflow)
            cardsRef.current.forEach((card, index) => {
              if (!card) return;
              
              const distance = index - activeIndex;
              const absDistance = Math.abs(distance);
              
              // Cards to the left rotate +12°, cards to the right rotate -12°
              let rotateY = 0;
              if (distance < 0) {
                rotateY = 12;
              } else if (distance > 0) {
                rotateY = -12;
              }
              
              const scale = absDistance === 0 ? 1 : 0.75;
              const opacity = absDistance === 0 ? 1 : 0.7;
              
              gsap.to(card, {
                scale,
                opacity,
                rotateY,
                duration: 0.5,
                ease: "power3.out"
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
              const rotateY = isActive ? 0 : (index < lastIndex ? 12 : 0);
              gsap.to(card, {
                scale: isActive ? 1 : 0.75,
                opacity: isActive ? 1 : 0.7,
                rotateY,
                duration: 0.5,
                ease: "power3.out"
              });
            });
          },
          onLeaveBack: () => {
            // Resetare la prima poziție când ieșim înapoi din secțiune
            cardsRef.current.forEach((card, index) => {
              if (!card) return;
              const isActive = index === 0;
              const rotateY = isActive ? 0 : -12;
              gsap.to(card, {
                scale: isActive ? 1 : 0.75,
                opacity: isActive ? 1 : 0.7,
                rotateY,
                duration: 0.5,
                ease: "power3.out"
              });
            });
          }
        },
      });

      return () => {
        tween.kill();
        // Resetare scale, opacity și rotație la valori implicite
        cardsRef.current.forEach((card) => {
          if (card) {
            gsap.set(card, { scale: 1, opacity: 1, rotateY: 0 });
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
        style={{ width: "max-content", perspective: "1000px", perspectiveOrigin: "center center" }}
      >
        {services.map((service, index) => (
          <Link
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            to={service.link}
            className="service-card flex-shrink-0 origin-center"
            style={{ width: "80vw", maxWidth: "420px", transformStyle: "preserve-3d" }}
          >
            <Card className="hover:shadow-lg transition-shadow border-primary/20 hover:border-primary/40 overflow-hidden group relative h-[75vh]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
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
