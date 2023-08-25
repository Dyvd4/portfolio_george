import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

type _FormControlProps = {
	hasError?: boolean;
	errorMessage?: string;
};

export type FormControlProps = _FormControlProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"div">>, keyof _FormControlProps>;

function FormControl({ className, children, hasError, errorMessage, ...props }: FormControlProps) {
	return (
		<div className={cn(`flex flex-col items-start gap-1`, className)} {...props}>
			{children}
			{hasError && (
				<>
					<p className="pl-2 text-sm text-red-500">{errorMessage}</p>
				</>
			)}
		</div>
	);
}

export default FormControl;
