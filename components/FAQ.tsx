"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is solid waste management?</AccordionTrigger>
          <AccordionContent>
            Solid waste management refers to the process of collecting, treating, and disposing of solid waste materials 
            in an environmentally safe and economically efficient manner.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Why is recycling important?</AccordionTrigger>
          <AccordionContent>
            Recycling helps conserve natural resources, reduces landfill space, saves energy, prevents pollution, 
            and creates jobs in the recycling and manufacturing industries.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What are the main challenges in waste management?</AccordionTrigger>
          <AccordionContent>
            Key challenges include increasing waste generation, lack of infrastructure, limited funding, 
            public awareness, and the need for better policies and regulations.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}