"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const IMAGES = [
  "/images/hrana/IMG-20240621-WA0003.jpg",
  "/images/hrana/IMG-20240621-WA0004.jpg",
  "/images/hrana/IMG-20240621-WA0005.jpg",
];

const variants = {
  enter: {
    opacity: 0.1,
  },
  center: {
    zIndex: 1,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
};

export function SectionHero() {
  const [page, setPage] = useState(0);

  const imageIndex = wrap(0, IMAGES.length, page);

  const paginate = (newDirection: number) => {
    setPage(page + newDirection);
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      paginate(1);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [page]);

  return (
    <section className="w-full">
      <div className="relative w-full min-h-[700px]">
        <AnimatePresence initial={false}>
          <motion.img
            className="absolute w-full h-full object-cover object-center"
            key={page}
            src={IMAGES[imageIndex]}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 1 },
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 flex justify-center items-center flex-col z-10 gap-3 text-white">
          <h1 className="font-bold text-8xl">21versta</h1>
          <h3 className="font-bold text-4xl">Srpski restoran u Rusiji</h3>
        </div>
      </div>
      <div className="h-3 w-full bg-orange-400"></div>
    </section>
  );
}
