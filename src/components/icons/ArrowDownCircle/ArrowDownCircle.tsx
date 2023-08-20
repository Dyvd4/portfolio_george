import useCssVariableValue from "@/hooks/useCssVariableValue";
import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef } from "react";

type _ArrowDownCircleProps = {
	isActive?: boolean;
};

export type ArrowDownCircleProps = _ArrowDownCircleProps &
	Omit<ComponentPropsWithRef<"svg">, keyof _ArrowDownCircleProps>;

function ArrowDownCircle({ className, isActive, ...props }: ArrowDownCircleProps) {
	const secondaryColor = useCssVariableValue("--color-secondary");
	const primaryColor = useCssVariableValue("--color-primary");
	const strokeColor = (isActive ? primaryColor : secondaryColor) || "hsla(0, 0%, 50%, 1)";
	return (
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("", className)}
			{...props}
		>
			<path
				stroke={strokeColor}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.75024 12C2.75024 17.108 6.89124 21.25 12.0002 21.25C17.1082 21.25 21.2502 17.108 21.2502 12C21.2502 6.892 17.1082 2.75 12.0002 2.75C6.89124 2.75 2.75024 6.892 2.75024 12Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				stroke={strokeColor}
				d="M8.52905 10.5577L12.0001 14.0437L15.4711 10.5577"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default ArrowDownCircle;
