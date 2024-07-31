export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  keyword: string;
  links: {
    instagram: string;
    linkedIn: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Affordable Social Media and Blog Content for Accounting Firms | Starting at £26/week",
  description:
    "Boost your accounting firm's online presence with expertly crafted social media posts, blogs, and videos. Starting from £26 per week. Free trial available. Cancel anytime.",
  url: "https://accounting-content-agency",
  ogImage: "https://accounting-content-agency/og.jpg",
  keyword:
    "accounting content, social media for accountants, accounting blogs, marketing for accountants, UK accounting content, affordable accounting content, social media marketing for accountants, blog content for accountants, video marketing for accountants",
  links: {
    instagram: "",
    linkedIn: "",
  },
};
