import { cn } from "@/lib/utils";

interface StarsProps {
  className?: string;
}

export function Stars({ className }: StarsProps) {
  return (
    <div
      className={cn(
        "flex justify-center items-center gap-2 md:gap-4 lg:gap-8 w-12",
        className
      )}
    >
      <img src="/images/line-star1.svg" />
      <img src="/images/line-star2.svg" className="w-6 md:w-full" />
      <img src="/images/line-star1.svg" />
    </div>
  );
}
