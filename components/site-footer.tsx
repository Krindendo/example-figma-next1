import * as React from "react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Logo } from "./logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      className={cn(
        "flex flex-col justify-center px-3 py-4 bg-[#ede5da]",
        className
      )}
    >
      <div className="container inline-flex justify-between items-center gap-11">
        <Logo className="w-[150px]" />
        <div className="flex justify-center items-center gap-3">
          <a href={siteConfig.links.instagram} className="p-2">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              color="#333333"
              width="24px"
              height="24px"
            />
          </a>
          <a href={siteConfig.links.instagram} className="p-2">
            <FontAwesomeIcon
              icon={faInstagram}
              color="#333333"
              width="24px"
              height="24px"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
