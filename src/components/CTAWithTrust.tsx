import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

interface Badge {
  icon: string;
  text: string;
}

interface CTAWithTrustProps {
  primaryButton?: {
    text: string;
    href: string;
  } | null;
  secondaryButton?: {
    text: string;
    href: string;
  };
  microcopy: string;
  badges: Badge[];
  className?: string;
}

export const CTAWithTrust = ({
  primaryButton = null,
  secondaryButton,
  microcopy,
  badges,
  className = ""
}: CTAWithTrustProps) => {
  return (
    <div className={`flex flex-col items-center gap-6 ${className}`}>
      {/* Butoane CTA */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {primaryButton && (
          <Button asChild size="lg" className="text-lg">
            <Link to={primaryButton.href}>{primaryButton.text}</Link>
          </Button>
        )}
        {secondaryButton && (
          <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 border-accent text-white hover:text-white">
            <a href={secondaryButton.href}>
              <Phone className="mr-2 h-5 w-5" />
              {secondaryButton.text}
            </a>
          </Button>
        )}
      </div>

      {/* Microcopy */}
      <p className="text-sm text-center text-white opacity-90">
        {microcopy}
      </p>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl mt-2">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex items-center gap-2 justify-center text-center p-3 rounded-lg bg-background/10 backdrop-blur-sm border border-current/20"
          >
            <span className="text-2xl">{badge.icon}</span>
            <span className="text-sm font-medium">{badge.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
