import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

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
  const ctaRef = useRef<HTMLDivElement>(null);

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

      // Calculate snap points for each card + CTA button at the end
      const totalCards = services.length;
      const totalItems = totalCards + 1; // +1 for CTA button
      const snapPoints = [...services.map((_, i) => {
        if (i === totalCards - 1) {
          // Ultimul card - snap point pentru a sta mai mult
          return 0.7;
        }
        // Restul cardurilor - distribuție pe primii 70%
        return (i / (totalCards - 1)) * 0.7;
      }), 1]; // Ultimul snap point e pentru CTA button

      // Set initial scale for all cards except the first
      cardsRef.current.forEach((card, index) => {
        if (card && index !== 0) {
          gsap.set(card, { scale: 0.85, opacity: 0.7 });
        }
      });

      const tween = gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 20%",
          end: () => `+=${scrollDistance * 2}`,
          scrub: 2.5,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: snapPoints,
            duration: { min: 0.3, max: 0.6 },
            delay: 0.15,
            ease: "power2.inOut"
          },
          onUpdate: (self) => {
            const progress = self.progress;
            const totalCards = services.length;
            // Map progress to card index (cards occupy first 70% of scroll)
            const cardProgress = Math.min(progress / 0.7, 1);
            const activeIndex = progress > 0.85 ? totalCards : Math.round(cardProgress * (totalCards - 1));

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

            // CTA button scale effect
            if (ctaRef.current) {
              const ctaActive = progress > 0.85;
              gsap.to(ctaRef.current, {
                scale: ctaActive ? 1 : 0.85,
                opacity: ctaActive ? 1 : 0.7,
                duration: 0.3,
                ease: "power2.out"
              });
            }

            // Parallax effect on images
            imagesRef.current.forEach((img, index) => {
              if (!img) return;
              
              const imgCardProgress = index / (totalCards - 1);
              let offset = (cardProgress - imgCardProgress) * 30;
              
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
          }
        },
      });

      return () => {
        tween.kill();
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
    <div ref={sectionRef} className="services-pin md:hidden relative overflow-hidden">
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
                className="absolute inset-[-30px] bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />
              <CardContent className="p-6 relative z-10 h-full flex flex-col justify-end">
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
        
        {/* CTA Button at the end */}
        <div
          ref={ctaRef}
          className="flex-shrink-0 origin-center flex items-center justify-center"
          style={{ width: "80vw", maxWidth: "420px" }}
        >
          <Link to="/servicii" className="w-full">
            <Button 
              size="lg" 
              className="w-full h-16 text-lg font-semibold gap-3 bg-primary hover:bg-primary/90"
            >
              <Eye className="h-5 w-5" />
              Vezi toate serviciile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileServicesCarousel;
