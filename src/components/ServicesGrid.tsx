import { Shirt, BedDouble, Sparkles, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Service {
  id: number;
  name: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    name: "WASH & FOLD",
    icon: <Shirt className="h-12 w-12" />,
  },
  {
    id: 2,
    name: "COMFORTERS",
    icon: <BedDouble className="h-12 w-12" />,
  },
  {
    id: 3,
    name: "DRY CLEANING",
    icon: <Sparkles className="h-12 w-12" />,
  },
  {
    id: 4,
    name: "EXPRESS",
    icon: <Zap className="h-12 w-12" />,
  },
];

const ServicesGrid = () => {
  return (
    <section className="mb-12 md:mb-16 animate-slide-up">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {services.map((service) => (
          <Card
            key={service.id}
            className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 hover:border-primary active:scale-95"
          >
            <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 gap-3 md:gap-4 min-h-[140px] sm:min-h-[160px]">
              <div className="text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-foreground text-center group-hover:text-primary transition-colors">
                {service.name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
