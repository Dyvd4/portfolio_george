"use client";

import ArrowBottomLeft from "@/components/icons/ArrowBottomLeft";
import { cn } from "@/utils/component-utils";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";

type _ProjectFooterProps = {
	imageSrc: string;
	nextProjectHref: string;
};

type ProjectFooterProps = _ProjectFooterProps &
	Omit<ComponentPropsWithRef<"footer">, keyof _ProjectFooterProps>;

function ProjectFooter({ className, nextProjectHref, imageSrc, ...props }: ProjectFooterProps) {
	return (
		<footer className={cn(`px-12 pt-[440px]`, className)} {...props}>
			<Link href={nextProjectHref} className="group flex cursor-pointer flex-col gap-6">
				<div className="group flex justify-between gap-4">
					<h1 className="text-9xl leading-[130%]">Next Project</h1>
					<div className="flex flex-col justify-end">
						<ArrowBottomLeft />
					</div>
				</div>
				<div className="relative h-[640px]">
					<Image
						className="rounded-tl-2xl rounded-tr-2xl object-cover"
						fill
						src={imageSrc}
						alt="Next project footer image"
					/>
				</div>
			</Link>
		</footer>
	);
}

export default ProjectFooter;
