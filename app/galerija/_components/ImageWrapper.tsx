import { cn } from "@/lib/utils";

interface ImageWrapperProps {
  src: string;
  className?: string;
  alt: string;
}

export function ImageWrapper({ src, className, alt }: ImageWrapperProps) {
  return (
    <img
      src={src}
      className={cn(
        className,
        "h-96 w-full object-cover object-center rounded-xl"
      )}
      alt={alt}
    />
  );
}
