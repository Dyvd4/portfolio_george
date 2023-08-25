import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

type _TextareaProps = {
	hasError?: boolean;
};

export type TextareaProps = _TextareaProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"textarea">>, keyof _TextareaProps>;

function Textarea({ className, children, hasError, ...props }: TextareaProps) {
	return (
		<textarea
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

export default Textarea;
