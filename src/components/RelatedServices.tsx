import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface RelatedService {
  title: string;
  link: string;
  description: string;
  anchorText?: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
}

const RelatedServices = ({ services }: RelatedServicesProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-heading">
            Servicii complementare
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="h-full hover:shadow-lg transition-shadow border-primary/20 hover:border-primary/40">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-heading">
                      {service.title}
                    </h3>
                    <p className="text-text-custom mb-4">
                      {service.description}
                    </p>
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
      </div>
    </section>
  );
};

export default RelatedServices;
