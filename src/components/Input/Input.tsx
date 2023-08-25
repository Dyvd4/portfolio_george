import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { cn } from "@/utils/component-utils";

type _InputProps = {
	hasError?: boolean;
};

export type InputProps = _InputProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"input">>, keyof _InputProps>;

function Input({ className, children, hasError, ...props }: InputProps) {
	return (
		<input
			className={cn(
				`text-tertiary bg-secondary text-primary focus:placeholder:text-primary
                rounded-lg px-4 py-3 outline-1 outline-white hover:outline focus:outline`,
				{
					"text-red-500 placeholder:text-red-500": !!hasError,
				},
				className
			)}
			{...props}
		/>
	);
}

export default Input;
