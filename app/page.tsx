import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { SectionHero } from "./_components/section-hero";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keyword,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "article",
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage.toString(),
        width: 1200,
        height: 530,
        alt: siteConfig.name,
      },
    ],
  },
};
export default async function IndexPage() {
  return (
    <>
      <SectionHero />
      <section className="container pt-20 flex flex-col gap-10 justify-center items-center">
        <h2 className="font-bold text-4xl text-center">
          Autentični domaći srpski ukusi i recepti
        </h2>
        <p className="max-w-4xl text-center text-lg text-sky-900">
          Nudimo autentične domaće srpske ukuse. Služimo prepoznatljiva jela kao
          što su lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          esse repellendus molestiae.
        </p>
        <p className="max-w-4xl text-center text-lg text-sky-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          atque sunt unde sequi ullam nobis ad nesciunt quae voluptatibus
          praesentium alias, sit doloremque! Nihil autem non aut assumenda,
          quibusdam animi!
        </p>
        <Link href={"/menu"} className={buttonVariants({ variant: "default" })}>
          Vidi meni
        </Link>
      </section>
      <section className="container pt-20 flex flex-col gap-10 justify-center items-center">
        <div className="grid grid-cols-4 grid-rows-[210px_210px] gap-1">
          <img
            src="/images/hrana/IMG-20240621-WA0003.jpg"
            alt="hrana"
            className="w-full h-full object-cover object-center rounded-md"
          />
          <img
            src="/images/hrana/IMG-20240621-WA0004.jpg"
            alt="hrana"
            className="w-full h-full object-cover object-center rounded-md"
          />
          <img
            src="/images/hrana/IMG-20240621-WA0005.jpg"
            alt="hrana"
            className="w-full h-full object-cover object-center rounded-md"
          />
          <img
            src="/images/hrana/IMG-20240621-WA0021.jpg"
            alt="hrana"
            className="w-full h-full object-cover object-top rounded-md"
          />
          <img
            src="/images/hrana/IMG-20240621-WA0018.jpg"
            alt="hrana"
            className="w-full h-full object-cover object-center rounded-md"
          />
          <img
            src="/images/hrana/IMG-20240621-WA0012.jpg"
            alt="hrana"
            className="w-full h-full object-cover object-center rounded-md"
          />
          <img
            src="/images/hrana/IMG-20240621-WA0019.jpg"
            alt="hrana"
            className="w-full h-full object-cover object-center rounded-md"
          />
          <img
            src="/images/hrana/IMG-20240621-WA0022.jpg"
            alt="hrana"
            className="w-full h-full object-cover object-center rounded-md"
          />
        </div>
      </section>

      <div className="h-3 w-full bg-orange-400 mt-40"></div>

      <section className="px-4 py-20 flex flex-col justify-center items-center gap-10">
        <h3
          id="nas-tim"
          className="font-inter text-4xl font-medium tracking-tight"
        >
          Naš tim
        </h3>
        <h3 className="font-inter text-2xl font-medium tracking-tight">
          Profesionalna usluga najljubaznijeg osoblja u regionu.
        </h3>
      </section>
      <div className="bg-cover min-h-[700px] bg-fixed bg-center bg-no-repeat bg-[url('/images/0-02-05-bd1c06a0358ee2f3eb3b3035fdad575fbdeba645c22026dc03d06a15f59a2f45_96e204d7a5d94721.jpg')]"></div>
    </>
  );
}
