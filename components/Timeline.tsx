import React, { useState, useRef, useEffect } from "react";
import { Clock, Code2, Flag, Lightbulb, Presentation, Rocket, Trophy, Users } from "lucide-react";
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
    time: "Day 1 - 10:00 AM",
    description: "Welcome address and theme announcement",
    icon: Presentation,
    color: "bg-purple-500",
  },
  {
    title: "Team Formation",
    time: "Day 1 - 11:00 AM",
    description: "Find your teammates and brainstorm ideas",
    icon: Users,
    color: "bg-green-500",
  },
  {
    title: "Hacking Begins",
    time: "Day 1 - 12:00 PM",
    description: "Start working on your innovative projects",
    icon: Code2,
    color: "bg-red-500",
  },
  {
    title: "Ideation Workshop",
    time: "Day 1 - 2:00 PM",
    description: "Workshop on brainstorming and planning",
    icon: Lightbulb,
    color: "bg-yellow-500",
  },
  {
    title: "Midnight Milestone",
    time: "Day 2 - 12:00 AM",
    description: "Late night check-in and progress sharing",
    icon: Clock,
    color: "bg-indigo-500",
  },
  {
    title: "Project Submissions",
    time: "Day 2 - 10:00 AM",
    description: "Submit your projects for judging",
    icon: Rocket,
    color: "bg-pink-500",
  },
  {
    title: "Judging & Awards",
    time: "Day 2 - 2:00 PM",
    description: "Project presentations and winners",
    icon: Trophy,
    color: "bg-orange-500",
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
        <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 top-1/2 -translate-y-1/2" />

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
