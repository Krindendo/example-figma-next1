import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MenuItemProps } from "../kontakt/_components/MenuItem";
import { MenuList } from "../kontakt/_components/MenuList";

export default function Menu() {
  return (
    <section className="container flex flex-col justify-center items-center gap-16 h-full flex-1 pt-10 pb-20">
      <h1 className="font-bold text-5xl self-start text-orange-700">
        Jelovnik
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-2"
      >
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="bg-orange-100 px-4 rounded-md border-none hover:no-underline">
            <p className="font-bold text-3xl text-orange-600 ">
              для Вашего освежения
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <MenuList items={menu1} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-none">
          <AccordionTrigger className="bg-orange-100 px-4 rounded-md border-none hover:no-underline">
            <p className="font-bold text-3xl text-orange-600 ">
              Тепло а освежительно
            </p>
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-none">
          <AccordionTrigger className="bg-orange-100 px-4 rounded-md border-none hover:no-underline">
            <p className="font-bold text-3xl text-orange-600 ">
              Что-то с ложка
            </p>
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-none">
          <AccordionTrigger className="bg-orange-100 px-4 rounded-md border-none hover:no-underline">
            <p className="font-bold text-3xl text-orange-600 ">
              О как вкусно, а с душой
            </p>
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-none">
          <AccordionTrigger className="bg-orange-100 px-4 rounded-md border-none hover:no-underline">
            <p className="font-bold text-3xl text-orange-600 ">
              С гриль, но по-Сербски
            </p>
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="border-none">
          <AccordionTrigger className="bg-orange-100 px-4 rounded-md border-none hover:no-underline">
            <p className="font-bold text-3xl text-orange-600 ">
              Горячее по-Сербски
            </p>
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7" className="border-none">
          <AccordionTrigger className="bg-orange-100 px-4 rounded-md border-none hover:no-underline">
            <p className="font-bold text-3xl text-orange-600 ">
              Из моря по-Адриатически
            </p>
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8" className="border-none">
          <AccordionTrigger className="bg-orange-100 px-4 rounded-md border-none hover:no-underline">
            <p className="font-bold text-3xl text-orange-600 ">
              Из бабушкин огород
            </p>
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9" className="border-none">
          <AccordionTrigger className="bg-orange-100 px-4 rounded-md border-none hover:no-underline">
            <p className="font-bold text-3xl text-orange-600 ">
              Забывайте о диете
            </p>
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10" className="border-none">
          <AccordionTrigger className="bg-orange-100 px-4 rounded-md border-none hover:no-underline">
            <p className="font-bold text-3xl text-orange-600 ">
              У Сербов ничего без хлеба
            </p>
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

const menu1: MenuItemProps[] = [
  {
    title: "МЯСНАЯ ТАРЕЛКА",
    ingredient:
      "(копченая говядина, копченая свинина, копченая колбаса, сыр Гауда, сыр Фета)",
    price: "300 rub",
    weight: "300 g",
  },
];
