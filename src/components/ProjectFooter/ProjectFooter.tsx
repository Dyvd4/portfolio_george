"use client";

import ArrowBottomLeft from "@/components/icons/ArrowBottomLeft";
import { cn } from "@/utils/component-utils";
import Image from "next/image";
import { ComponentPropsWithRef } from "react";

type _ProjectFooterProps = {
	imageSrc: string;
	nextProjectHref: string;
};

type ProjectFooterProps = _ProjectFooterProps &
	Omit<ComponentPropsWithRef<"footer">, keyof _ProjectFooterProps>;

function ProjectFooter({ className, nextProjectHref, imageSrc, ...props }: ProjectFooterProps) {
	return (
		<footer className={cn(`flex flex-col gap-6 px-12 pt-[440px]`, className)} {...props}>
			<div className="flex justify-between gap-4">
				<h1 className=" text-9xl">Next Project</h1>
				<div className="flex flex-col justify-end">
					<ArrowBottomLeft />
				</div>
			</div>
			<Image width={1824} height={640} src={imageSrc} alt="Next project footer image" />
		</footer>
	);
}

export default ProjectFooter;
