"use client";

import { motion, useCycle } from "framer-motion";

import { Logo } from "@/components/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SiteHeaderMenuToggle } from "./site-header-menu-toggle";
import { useEffect, useLayoutEffect, useState } from "react";

export function SiteHeader() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [instantClose, setInstantClose] = useState(false);
  const pathname = usePathname();

  const variants = {
    open: {
      x: 0,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: 200,
      transition: {
        x: { stiffness: 1000 },
      },
    },
  };

  const instantClosevariants = {
    open: {
      x: 0,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
  };

  // Close the navbar when the route changes
  useLayoutEffect(() => {
    if (isOpen) {
      setInstantClose(true);
      toggleOpen();
    }
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      setInstantClose(false);
    }
  }, [isOpen]);

  return (
    <motion.header
      layoutScroll
      className="sticky top-0 left-0 right-0 w-full h-[88px] bg-white z-50"
    >
      <div className="container flex justify-between items-center h-full">
        <Logo className="w-[150px]" />

        <div className="hidden lg:flex flex-row justify-center items-center gap-10">
          <Link
            href="/#o-nama"
            className={cn(
              "font-medium text-lg hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2 hover:mt-[2px]"
            )}
          >
            O nama
          </Link>
          <Link
            href="/menu"
            className="font-medium text-lg hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2 hover:mt-[2px]"
          >
            Menu
          </Link>
          <Link
            href="/galerija"
            className={cn(
              "font-medium text-lg hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2 hover:mt-[2px]",
              pathname === "/galerija" && "text-sky-700"
            )}
          >
            Galerija
          </Link>
          <Link
            href="/kontakt"
            className={cn(
              "font-medium text-lg hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2 hover:mt-[2px]",
              pathname === "/kontakt" && "text-sky-700"
            )}
          >
            Kontakt
          </Link>
        </div>
        <div className={cn("block: lg:hidden")}>
          <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
            <motion.button
              className={cn("inset-0", isOpen ? "fixed" : "hidden")}
              onClick={() => toggleOpen()}
            ></motion.button>

            <motion.ul
              className="fixed right-0 top-[88px] w-[200px] flex flex-col gap-4 pl-5 py-8 bg-[#ede5da]"
              variants={instantClose ? instantClosevariants : variants}
            >
              <Link href="/#o-nama" className={cn("font-medium xs:text-lg")}>
                O nama
              </Link>
              <Link
                href="/docs/МЕНЮ_04.05.docx"
                className="font-medium xs:text-lg"
              >
                Menu
              </Link>
              <Link
                href="/galerija"
                className={cn(
                  "font-medium xs:text-lg",
                  pathname === "/galerija" && "text-sky-700"
                )}
              >
                Galerija
              </Link>
              <Link
                href="/kontakt"
                className={cn(
                  "font-medium xs:text-lg",
                  pathname === "/kontakt" && "text-sky-700"
                )}
              >
                Kontakt
              </Link>
            </motion.ul>
            <SiteHeaderMenuToggle
              instantClose={instantClose}
              toggle={() => toggleOpen()}
            />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
