import * as React from "react";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

interface SiteHeaderMenuToggleProps {
  toggle: MouseEventHandler<HTMLButtonElement>;
  instantClose: boolean;
}

export function SiteHeaderMenuToggle({
  toggle,
  instantClose,
}: SiteHeaderMenuToggleProps) {
  return (
    <button onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          transition={instantClose ? { duration: 0 } : { duration: 0.2 }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={instantClose ? { duration: 0 } : { duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          transition={instantClose ? { duration: 0 } : { duration: 0.2 }}
        />
      </svg>
    </button>
  );
}
