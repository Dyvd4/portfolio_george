"use-client";

import { cn } from "@/utils/component-utils";
import Image, { ImageProps } from "next/image";

export type IconVariant = "primary" | "secondary";
type _IconProps = {
	variant?: IconVariant;
};

export type IconProps = _IconProps & Omit<ImageProps, keyof _IconProps>;

function Icon({ className, src, alt, variant = "primary", ...props }: IconProps) {
	return (
		<Image
			className={cn(
				``,
				{
					"text-primary": variant === "primary",
					"fill-gray-500 stroke-gray-500": variant === "secondary",
				},
				className
			)}
			src={src}
			alt={alt}
			width={32}
			height={32}
			{...props}
		/>
	);
}

export default Icon;
