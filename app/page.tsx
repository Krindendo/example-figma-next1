import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { SectionHero } from "./_components/section-hero";

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
      <section className="container py-20">
        <h2 className="font-bold text-4xl text-center">
          Autentični domaći srpski ukusi i recepti
        </h2>
      </section>
    </>
  );
}
