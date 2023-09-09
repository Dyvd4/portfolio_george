"use client";

import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef, PropsWithChildren, useRef } from "react";
import { Copy } from "@/components/icons";

type _CopyableProps = {};

export type CopyableProps = _CopyableProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"div">>, keyof _CopyableProps>;

function Copyable({ className, children, ...props }: CopyableProps) {
	const childrenRef = useRef<HTMLDivElement | null>(null);
	const handleClick = () => navigator.clipboard.writeText(childrenRef.current!.innerText);
	return (
		<div className={cn(`group flex cursor-pointer select-none gap-2`, className)} {...props}>
			<div ref={childrenRef}>{children}</div>
			<div className="flex items-start pt-4">
				<Copy onClick={handleClick} isActive />
			</div>
		</div>
	);
}

export default Copyable;
