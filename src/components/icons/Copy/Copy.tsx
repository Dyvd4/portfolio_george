import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef } from "react";

type _CopyProps = {};

export type CopyProps = _CopyProps & Omit<ComponentPropsWithRef<"svg">, keyof _CopyProps>;

function Copy({ className, ...props }: CopyProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={25}
			height={24}
			viewBox="0 0 25 24"
			fill="none"
			className={cn("group cursor-pointer", className)}
			{...props}
		>
			<path
				className="group-hover:stroke-primary stroke-tertiary"
				d="M20.5 9H11.5C10.3954 9 9.5 9.89543 9.5 11V20C9.5 21.1046 10.3954 22 11.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V11C22.5 9.89543 21.6046 9 20.5 9Z"
				stroke="#808080"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				className="group-hover:stroke-primary stroke-tertiary"
				d="M5.5 15H4.5C3.96957 15 3.46086 14.7893 3.08579 14.4142C2.71071 14.0391 2.5 13.5304 2.5 13V4C2.5 3.46957 2.71071 2.96086 3.08579 2.58579C3.46086 2.21071 3.96957 2 4.5 2H13.5C14.0304 2 14.5391 2.21071 14.9142 2.58579C15.2893 2.96086 15.5 3.46957 15.5 4V5"
				stroke="#808080"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default Copy;
