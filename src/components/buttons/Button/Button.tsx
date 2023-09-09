"use client";

import { ComponentPropsWithRef, PropsWithChildren, forwardRef } from "react";
import { cn } from "@/utils/component-utils";

type _ButtonProps = {
	isHovering?: boolean;
};

export type ButtonProps = _ButtonProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"button">>, keyof _ButtonProps>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{ className, children, isHovering, ...props }: ButtonProps,
	ref
) {
	return (
		<button
			ref={ref}
			className={cn(
				`bg-secondary hover:text-primary hover:bg-primary
				disabled:hover:bg-secondary disabled:hover:text-secondary
				transform select-none
				rounded-full px-8 py-3 text-lg
				transition-transform duration-150
				hover:shadow-[0px_12px_64px_0px_rgba(96,83,248,0.48)] active:scale-95 active:shadow-none
				disabled:cursor-not-allowed disabled:hover:shadow-none disabled:active:scale-100`,
				{
					"text-primary bg-primary shadow-[0px_12px_64px_0px_rgba(96,83,248,0.48)]":
						isHovering,
				},
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
});

export default Button;
