"use client";

import Image from "next/image";
import { ComponentPropsWithRef, PropsWithChildren } from "react";
import ArrowBottomLeft from "@/components/icons/ArrowBottomLeft";
import useFooterOptions from "@/hooks/useFooterOptions";

type _ProjectFooterProps = {
	imageSrc: string;
	nextProjectHref: string;
};

type ProjectFooterProps = _ProjectFooterProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"footer">>, keyof _ProjectFooterProps>;

function ProjectFooter({
	className,
	children,
	nextProjectHref,
	imageSrc,
	...props
}: ProjectFooterProps) {
	useFooterOptions({ disable: true });
	return (
		<footer className="flex flex-col gap-6 px-12 pt-[440px]">
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
