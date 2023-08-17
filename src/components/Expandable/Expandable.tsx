"use client";

import ArrowDownCircle from "@/components/icons/ArrowDownCircle";
import useToggle from "@/hooks/useToggle";
import { cn } from "@/utils/component-utils";
import autoAnimate from "@formkit/auto-animate";
import classNames from "classnames";
import { ComponentPropsWithRef, PropsWithChildren, useState } from "react";

type _ExpandableProps = {
	title: string;
	description: string;
};

export type ExpandableProps = _ExpandableProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"div">>, keyof _ExpandableProps>;

function Expandable({ className, children, title, description, ...props }: ExpandableProps) {
	const [isExpanded, , toggleIsExpanded] = useToggle(false);
	const [hoverIsActive, setHoverIsActive] = useState(false);

	return (
		<div
			onMouseOut={() => setHoverIsActive(false)}
			onMouseOver={() => setHoverIsActive(true)}
			ref={(ref) => ref && autoAnimate(ref)}
			onClick={toggleIsExpanded}
			className={cn(
				`border-1 border-tertiary group
				flex w-[576px] cursor-pointer flex-col
				gap-4 rounded-lg border p-6 text-xl`,
				{
					"border-primary": !!hoverIsActive,
				},
				className
			)}
			{...props}
		>
			<div className="flex items-center justify-between">
				<h1>{title}</h1>
				<ArrowDownCircle
					className={classNames({
						"rotate-180": isExpanded,
					})}
					isActive={!!hoverIsActive}
				/>
			</div>
			{isExpanded && (
				<>
					<p className="text-secondary">{description}</p>
				</>
			)}
		</div>
	);
}

export default Expandable;
