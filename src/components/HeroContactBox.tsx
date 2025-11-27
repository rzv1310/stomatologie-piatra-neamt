import { Button } from "@/components/ui/button";
import { Phone, Clock } from "lucide-react";
import { ReactNode } from "react";

interface HeroContactBoxProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  phoneNumber?: string;
  microcopy: string;
  icon?: ReactNode;
}

export const HeroContactBox = ({
  title,
  subtitle,
  buttonText = "Sună ACUM - 0333 630 005",
  phoneNumber = "+40333630005",
  microcopy,
  icon = <Clock className="h-6 w-6 text-accent" />
}: HeroContactBoxProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-6 mb-8">
      {title && (
        <div className="flex items-center gap-3 mb-3">
          {icon}
          <span className="text-lg font-semibold text-white">{title}</span>
        </div>
      )}
      {subtitle && (
        <p className="text-lg mb-4 text-white">{subtitle}</p>
      )}
      <a href={`tel:${phoneNumber}`}>
        <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 mb-4">
          <Phone className="mr-2 h-6 w-6" />
          {buttonText}
        </Button>
      </a>
      <p className="text-sm text-white/90">{microcopy}</p>
    </div>
  );
};
