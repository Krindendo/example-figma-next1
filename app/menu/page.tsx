import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Menu() {
  return (
    <section className="container flex flex-col md:flex-row justify-center items-center gap-16 h-full flex-1 pt-10 pb-20">
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-2"
      >
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="bg-orange-100 px-2 rounded-md border-none">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-none">
          <AccordionTrigger className="bg-orange-100 px-2 rounded-md border-none">
            Is it styled?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-none">
          <AccordionTrigger className="bg-orange-100 px-2 rounded-md border-none">
            Is it animated?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
