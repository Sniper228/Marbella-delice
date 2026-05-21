import Image from "next/image";
import Link from "next/link";
import { brandImages } from "@/lib/images";

type BrandLogoProps = {
  variant?: "nav" | "footer";
  className?: string;
  priority?: boolean;
  linkToHome?: boolean;
  onClick?: () => void;
};

const sizeMap = {
  nav: {
    width: 140,
    height: 48,
    imgClass:
      "h-9 w-auto max-w-[120px] object-contain sm:h-10 sm:max-w-[132px] md:h-11 md:max-w-[140px]",
  },
  footer: {
    width: 160,
    height: 64,
    imgClass: "h-14 w-auto max-w-[150px] object-contain md:h-16 md:max-w-[170px]",
  },
};

export function BrandLogo({
  variant = "nav",
  className = "",
  priority = false,
  linkToHome = true,
  onClick,
}: BrandLogoProps) {
  const { width, height, imgClass } = sizeMap[variant];

  const image = (
    <Image
      src={brandImages.logo}
      alt="Marbella Delice — Yaourts fruites premium"
      width={width}
      height={height}
      priority={priority}
      className={`${imgClass} transition-opacity duration-500 dark:opacity-[0.98] ${className}`}
    />
  );

  if (!linkToHome) {
    return (
      <span className="inline-flex shrink-0 items-center rounded-xl">{image}</span>
    );
  }

  return (
    <Link
      href="#accueil"
      onClick={onClick}
      className="inline-flex shrink-0 items-center rounded-xl transition-opacity duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-strawberry/50"
      aria-label="Marbella Delice — Accueil"
    >
      {image}
    </Link>
  );
}
