import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface FaqItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const faqData: FaqItem[] = [
    {
      question: "What is Empower-tech?",
      answer: "Empower-tech is a Social Well-Being Hackathon that aims to bring together innovators, technologists, and changemakers to develop solutions that prioritize social equality, justice, empowerment, and sustainable development."
    },
    {
      question: "Who can participate?",
      answer: "Anyone with a passion for technology and social good can participate, including students, professionals, and enthusiasts from various fields."
    },
    {
      question: "What are the themes of the hackathon?",
      answer: "The themes include AI-Driven Safety Solutions for Real-Time Assistance, Cybersecurity & Digital Safety for all, Assistance for Elderly & Physically Challenged Individuals, Child Safety & Protection, and Community Empowerment & Public Safety."
    },
    {
      question: "Where is the event held?",
      answer: "The event is held at VIT Chennai (MG Auditorium)."
    },
    {
      question: "Who is conducting the event?",
      answer: "The event is conducted by OSPC, ACM, IEEEWIE, and IEEE Student Branch."
    },
    {
      question: "How can I register?",
      answer: "You can register for the event through the official website. Keep an eye out for registration announcements and deadlines."
    }
  ];

  return (
    <section className="w-full min-h-screen p-4 sm:p-6 lg:p-8 bg-opacity-90">
      <div className="mx-auto w-full max-w-4xl">
        <Card className="themebox tb22 shadow-xl backdrop-blur-sm overflow-hidden">
          <CardHeader className="text-center pb-2 sm:pb-4">
            <CardTitle className="themeboxtitle themeboxtitle2 tb2 text-xl sm:text-3xl lg:text-4xl font-bold px-2">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          
          <CardContent className="px-0 sm:px-2 md:px-4">
            <Accordion 
              type="single" 
              collapsible 
              className="space-y-1 sm:space-y-2"
            >
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="themebox tb22 rounded-md sm:rounded-lg transition-all duration-300 border border-opacity-20 group overflow-hidden"
                >
                 <AccordionTrigger
  className="text-left text-white p-3 sm:p-4 text-sm sm:text-base lg:text-lg font-medium transition-colors duration-300 group-hover:bg-opacity-10 break-words whitespace-normal w-full"
>
  <div className="flex items-center gap-2 w-full pr-4 max-w-full">
    <span className="flex-1">{faq.question}</span>
  </div>
</AccordionTrigger>
<AccordionContent
  className="px-3 sm:px-4 py-2 text-white text-opacity-90 text-sm sm:text-base leading-relaxed break-words whitespace-normal w-full max-w-full"
>
  {faq.answer}
</AccordionContent>

                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Faq;