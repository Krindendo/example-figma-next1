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
      <section className="container py-20 flex flex-col gap-10 justify-center items-center">
        <h2 className="font-bold text-4xl text-center">
          Autentični domaći srpski ukusi i recepti
        </h2>
        <p className="max-w-4xl text-center text-lg text-sky-900">
          Nudimo autentične domaće srpske ukuse. Služimo prepoznatljiva jela kao
          što su lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          esse repellendus molestiae.
        </p>
        <Link href={"/menu"} className={buttonVariants({ variant: "default" })}>
          Vidi meni
        </Link>
      </section>
      <div className="bg-cover min-h-[700px] bg-fixed bg-center bg-no-repeat bg-[url('/images/hrana/IMG-20240621-WA0003.jpg')]"></div>

      <div className="px-4 py-20 flex flex-col justify-center items-center gap-10">
        <h3
          id="nas-tim"
          className="font-inter text-4xl font-medium tracking-tight"
        >
          Naš tim
        </h3>
        <h3 className="font-inter text-2xl font-medium tracking-tight">
          Profesionalna usluga najljubaznijeg osoblja u regionu.
        </h3>
      </div>

      <div className="bg-cover min-h-[700px] bg-fixed bg-center bg-no-repeat bg-[url('/images/0-02-05-d447d36fc0f4a96e7f735cc35520fc4651a66f6938ac815656e41551f5e51631_2f984e626e84ac0a.jpg')]"></div>
    </>
  );
}
