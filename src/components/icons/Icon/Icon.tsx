import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

export type IconVariant = "primary" | "secondary";
type _IconProps = {
	variant?: IconVariant;
};

export type IconProps = _IconProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"svg">>, keyof _IconProps>;

function Icon({ className, children, variant = "primary", ...props }: IconProps) {
	return (
		<svg
			className={cn(
				``,
				{
					"fill-primary": variant === "primary",
					"fill-secondary": variant === "secondary",
				},
				className
			)}
			width="32"
			height="32"
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
		>
			{children}
		</svg>
	);
}

export default Icon;
