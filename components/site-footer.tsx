import * as React from "react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      className={cn(
        "w-full flex flex-col justify-center items-center px-3 py-14 gap-11 bg-[url('/images/footer-image1.png')] bg-center md:pt-36",
        className
      )}
    >
      <p className="text-[#101212] text-center">© Copyright 2024</p>
      <div className="flex justify-center items-center gap-3">
        <a
          href={siteConfig.links.instagram}
          className="rounded-full border border-white/15 p-3"
        >
          <img src="/icons/linkedin.png" className="" />
        </a>
        <a
          href={siteConfig.links.instagram}
          className="rounded-full border border-white/15 p-3"
        >
          <img src="/icons/instagram.png" className="" />
        </a>
      </div>
    </footer>
  );
}
