import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

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

      const cardWidth = window.innerWidth * 0.8 + 16; // 80vw + gap
      const totalCards = services.length;
      const snapPoints = Array.from({ length: totalCards }, (_, i) => i / (totalCards - 1));

      const tween = gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 40px",
          end: () => `+=${scrollDistance}`,
          scrub: 0.3,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: snapPoints,
            duration: { min: 0.2, max: 0.4 },
            delay: 0,
            ease: "power1.inOut",
          },
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
        className="track flex gap-4 px-4 py-4"
        style={{ width: "max-content" }}
      >
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className="service-card flex-shrink-0"
            style={{ width: "80vw", maxWidth: "420px" }}
          >
            <Card className="hover:shadow-lg transition-shadow border-primary/20 hover:border-primary/40 overflow-hidden group relative h-[70vh]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
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
      </div>
    </div>
  );
};

export default MobileServicesCarousel;
