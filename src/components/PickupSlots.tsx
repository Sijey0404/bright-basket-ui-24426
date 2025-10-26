import { Calendar, Clock, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TimeSlot {
  id: number;
  day: string;
  date: string;
  time: string;
}

const timeSlots: TimeSlot[] = [
  {
    id: 1,
    day: "MON",
    date: "OCT 26",
    time: "9 AM - 11 AM",
  },
  {
    id: 2,
    day: "TUE",
    date: "OCT 27",
    time: "9 AM - 11 AM",
  },
  {
    id: 3,
    day: "WED",
    date: "OCT 28",
    time: "9 AM - 11 AM",
  },
];

const PickupSlots = () => {
  return (
    <section className="animate-slide-up animation-delay-200 mb-12 md:mb-16">
      <div className="mb-6 md:mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
          <Calendar className="h-6 w-6 md:h-7 md:w-7 text-primary" />
          Schedule Your Pickup
        </h2>
        <p className="text-sm md:text-base text-muted-foreground px-4">Select your preferred pickup time slot</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {timeSlots.map((slot) => (
          <Card
            key={slot.id}
            className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 hover:border-accent active:scale-95"
          >
            <CardContent className="p-4 sm:p-5 md:p-6 min-h-[100px] flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-primary group-hover:text-accent transition-colors">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                  <p className="font-bold text-base md:text-lg">{slot.day}, {slot.date}</p>
                </div>
                <p className="text-xl md:text-2xl font-semibold text-foreground">{slot.time}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PickupSlots;
