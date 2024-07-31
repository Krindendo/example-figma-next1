import { cn } from "@/lib/utils";

interface StarsDivider {
  className?: string;
}

export function StarsDivider({ className }: StarsDivider) {
  return (
    <div
      className={cn(
        "w-full flex justify-center items-center gap-2 md:gap-4 lg:gap-8",
        className
      )}
    >
      <div className="h-[1px] w-full bg-[#08352c]/30 max-w-md"></div>
      <img src="/images/line-star1.svg" />
      <img src="/images/line-star2.svg" />
      <img src="/images/line-star1.svg" />
      <div className="h-[1px] w-full bg-[#08352c]/30 max-w-md"></div>
    </div>
  );
}
