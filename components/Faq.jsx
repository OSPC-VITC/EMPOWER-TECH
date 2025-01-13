import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

const Faq = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const faqData = [
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

  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

return (
    <section className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto space-y-8">
            <Card className="themebox tb22">
                <CardHeader className="text-center pb-8">
                    <CardTitle className="themeboxtitle themeboxtitle2 tb2">
                        Frequently Asked Questions
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {filteredFaqs.length === 0 ? (
                        <div className="text-center py-8 themebox tb22">
                            No matching questions found. Try a different search term.
                        </div>
                    ) : (
                        <Accordion type="single" collapsible className="space-y-4">
                            {filteredFaqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="themebox tb22 rounded-lg px-4"
                                >
                                    <AccordionTrigger className="text-left text-white py-4 text-lg font-medium">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-4 text-white">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    )}
                </CardContent>
            </Card>
        </div>
    </section>
);
};

export default Faq;