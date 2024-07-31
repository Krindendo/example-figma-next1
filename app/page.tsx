import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { SectionHero } from "./_components/section-hero";
import { SectionJobDescriptionTwo } from "./_components/section-job-description-two";
import { SectionLessJobEachWeekThree } from "./_components/section-less-job-each-week-three";
import { SectionPricingOptionsFour } from "./_components/section-pricing-options-four";
import { SectionBookAMeetingFive } from "./_components/section-book-a-meeting-five";

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
      <section>
        <p>Main page</p>
      </section>
    </>
  );
}
