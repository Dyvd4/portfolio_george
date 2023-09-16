import { cn } from "@/utils/component-utils";
import Image, { StaticImageData } from "next/image";
import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { ArrowRight } from "../icons";
import Link from "next/link";

export type _CaseCardProps = {
	title: string;
	src: StaticImageData;
	href: string;
};

export type CaseCardProps = _CaseCardProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"a">>, keyof _CaseCardProps>;

function CaseCard({ className, children, title, src, href, ...props }: CaseCardProps) {
	return (
		<Link
			className={cn(`group flex flex-1 cursor-pointer flex-col items-start gap-4`, className)}
			href={href}
			{...props}
		>
			<Image className="transform rounded-2xl" src={src} alt={"case card"} />
			<h3
				className="group-hover:text-primary text-tertiary flex cursor-pointer
							items-center gap-2 text-2xl transition-all duration-150"
			>
				{title}
				<ArrowRight className="-rotate-45 [&>path]:transition-all" />
			</h3>
		</Link>
	);
}

export default CaseCard;
