"use client";

import ArrowBottomLeft from "@/components/icons/ArrowBottomLeft";
import useFollowingCursorButton from "@/hooks/useFollowingCursorButton";
import { cn } from "@/utils/component-utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ComponentPropsWithRef, useRef } from "react";

type _ProjectFooterProps = {
	imageSrc: string;
	nextProjectHref: string;
};

type ProjectFooterProps = _ProjectFooterProps &
	Omit<ComponentPropsWithRef<"footer">, keyof _ProjectFooterProps>;

function ProjectFooter({ className, nextProjectHref, imageSrc, ...props }: ProjectFooterProps) {
	const parentRef = useRef<HTMLImageElement | null>(null);
	const router = useRouter();

	useFollowingCursorButton({
		parentRef: parentRef,
		buttonProps: {
			title: "See this work",
			onClick: () => {
				router.push(nextProjectHref);
			},
		},
	});

	return (
		<footer className={cn(`flex flex-col gap-6 px-12 pt-[440px]`, className)} {...props}>
			<div className="flex justify-between gap-4">
				<h1 className=" text-9xl">Next Project</h1>
				<div className="flex flex-col justify-end">
					<ArrowBottomLeft />
				</div>
			</div>
			<div className="relative h-[640px]">
				<Image
					ref={parentRef}
					className="rounded-tl-2xl rounded-tr-2xl object-cover"
					fill
					src={imageSrc}
					alt="Next project footer image"
				/>
			</div>
		</footer>
	);
}

export default ProjectFooter;
