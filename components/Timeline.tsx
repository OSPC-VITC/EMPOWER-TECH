import React, { useState, useRef, useEffect } from "react";
import { CheckCheck, ChefHat, Clock, Code2, CupSoda, Flag, ForkKnife, Hourglass, Lightbulb, PauseCircle, Presentation, Rocket, Trophy, Users } from "lucide-react";
import { motion } from "framer-motion";
import { TimelineEvent } from "./TimelineEvent";

const timelineData = [
  {
    title: "Registration Opens",
    time: "Day 1 - 9:00 AM",
    description: "Teams can register and start forming their groups",
    icon: Flag,
    color: "bg-blue-500",
  },
  {
    title: "Opening Ceremony",
    time: "Day 1 - 3:00 PM",
    description: "Welcome address , theme announcement and guest speech",
    icon: Presentation,
    color: "bg-purple-500",
  },
  {
    title: "Hacking Begins",
    time: "Day 1 - 4:00 PM",
    description: "Start working on your innovative projects",
    icon: Rocket,
    color: "bg-green-500",
  },
  {
    title: "Dinner",
    time: "Day 1 - 8:30 PM - 9:30 PM",
    description: "Fuel your passion and keep the momentum alive",
    icon: ForkKnife,
    color: "bg-red-500",
  },
  {
    title: "Overnight work",
    time: "Day 1 - 9:30 PM - 12:00 AM",
    description: "All night coding in progress and keep the momentum alive through the night",
    icon: Lightbulb,
    color: "bg-yellow-500",
  },
  {
    title: "Overnight Hacking",
    time: "Day 2 - 12:00 AM - 8:00 AM",
    description: "Where night owls craft brilliance in the stillness of the night",
    icon: Clock,
    color: "bg-indigo-500",
  },
  {
    title: "Breakfast",
    time: "Day 2 - 8:00 AM - 9:00 AM",
    description: "Refuel your energy for the final sprint ahead",
    icon: CupSoda,
    color: "bg-pink-500",
  },
  {
    title: "Hackathon continues",
    time: "Day 2 - 9:00 AM - 12:00 PM",
    description: "Push the boundaries of innovation as the clock ticks",
    icon: Code2,
    color: "bg-orange-500",
  },
  {
    title: "Lunch",
    time: "Day 2 - 12:00 PM - 1:00 PM",
    description: "A mid-day pause to recharge for the final session",
    icon: ChefHat,
    color: "bg-purple-500"
  },
  {
    title: "Hackathon Ends",
    time: "Day 2 - 1:00 PM - 3:00 PM",
    description: "The last dance- bring your vision to life with every line of code",
    icon: Hourglass,
    color: "bg-green-500"
  },
  {
    title: "Evaluation and Pitching",
    time: "Day 2 - 3:00 PM - 4:00 PM",
    description: "Showcase your brilliance and make your pitch count",
    icon: CheckCheck,
    color: "bg-red-500"
  },
  {
    title: "Break",
    time: "Day 2 - 4:00 PM - 4:30 PM",
    description: "A brief pause to catch your breath before the grand reveal",
    icon: PauseCircle,
    color: "bg-yellow-500"
  },
  {
    title: "Awards Ceremony",
    time: "Day 2 - 4:30 PM - 5:30 PM",
    description: "Celebrating triumphs and bidding farewell to an unforgettable journey",
    icon: Trophy,
    color: "bg-indigo-500"
  },
];

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = eventRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.5,
      }
    );

    eventRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        onClick={() => handleScroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all"
      >
        <motion.div
          whileHover={{ x: -3 }}
          className="w-6 h-6 border-l-2 border-t-2 border-white transform -rotate-45"
        />
      </button>
      <button
        onClick={() => handleScroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all"
      >
        <motion.div
          whileHover={{ x: 3 }}
          className="w-6 h-6 border-r-2 border-t-2 border-white transform rotate-45"
        />
      </button>

      {/* Timeline Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto relative py-12 hide-scrollbar"
      >
        {/* Timeline Line */}
        <div className="absolute h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 top-1/2 -translate-y-1/2"
        style={{ width: `${timelineData.length * 320}px` }} />

        {/* Timeline Events */}
        <div className="flex gap-8 px-16">
          {timelineData.map((event, index) => (
            <TimelineEvent
              key={index}
              {...event}
              index={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
