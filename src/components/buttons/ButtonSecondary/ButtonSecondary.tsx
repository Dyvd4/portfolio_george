import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

type _ButtonSecondaryProps = {};

export type ButtonSecondaryProps = _ButtonSecondaryProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"button">>, keyof _ButtonSecondaryProps>;

function ButtonSecondary({ className, children, ...props }: ButtonSecondaryProps) {
	return (
		<button
			className={cn(
				`bg-secondary text-primary
                disabled:text-secondary 
                inline-flex transform items-center 
                justify-center rounded-lg px-8
                py-3 transition-transform duration-150 hover:bg-white
                hover:text-black active:scale-95`,
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
}

export default ButtonSecondary;
