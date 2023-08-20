import useCssVariableValue from "@/hooks/useCssVariableValue";
import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef } from "react";

type _CopyProps = {
	isActive?: boolean;
};

export type CopyProps = _CopyProps & Omit<ComponentPropsWithRef<"svg">, keyof _CopyProps>;

function Copy({ className, isActive, ...props }: CopyProps) {
	const secondaryColor = useCssVariableValue("--color-secondary");
	const primaryColor = useCssVariableValue("--color-primary");
	const strokeColor = (isActive ? primaryColor : secondaryColor) || "hsla(0, 0%, 50%, 1)";
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("cursor-pointer", className)}
			{...props}
		>
			<g id="Name=Copy">
				<path
					id="Vector"
					d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z"
					stroke={strokeColor}
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					id="Vector_2"
					d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5"
					stroke={strokeColor}
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</g>
		</svg>
	);
}

export default Copy;
