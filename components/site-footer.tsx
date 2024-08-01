import * as React from "react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Logo } from "./logo";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      className={cn(
        "flex flex-col justify-center  px-3 py-4  bg-[#ede5da]",
        className
      )}
    >
      <div className="container inline-flex justify-between items-center gap-11">
        <Logo className="w-[150px]" />
        <div className="flex justify-center items-center gap-3">
          <a href={siteConfig.links.instagram} className="  p-3">
            <img src="/icons/linkedin.png" className="" />
          </a>
          <a href={siteConfig.links.instagram} className="  p-3">
            <img src="/icons/instagram.png" className="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
