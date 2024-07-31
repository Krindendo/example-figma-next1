interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <a href="/" aria-label="Home" className={className}>
      <h2 className="font-bold text-2xl">21versta</h2>
    </a>
  );
}
