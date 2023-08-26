import { cn } from "@/utils/component-utils";
import Image from "next/image";
import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { ArrowRight } from "../icons";

type _CaseCardProps = {
	title: string;
	src: string;
};

export type CaseCardProps = _CaseCardProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"div">>, keyof _CaseCardProps>;

function CaseCard({ className, children, title, src, ...props }: CaseCardProps) {
	return (
		<div className={cn(`flex flex-col items-start gap-4`, className)} {...props}>
			<Image className="rounded-2xl" width={888} height={888} src={src} alt={"case card"} />
			<h3
				className="text-secondary hover:text-primary group flex cursor-pointer
							items-center gap-2 text-2xl transition-all duration-150"
			>
				{title}
				<ArrowRight className="-rotate-45 [&>path]:transition-all" />
			</h3>
		</div>
	);
}

export default CaseCard;
