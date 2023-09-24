import CaseCard from "@/components/CaseCard";
import useFollowingCursorButton from "@/hooks/useFollowingCursorButton";
import MainCaseSectionCaseImg from "@/public/main-case-section_case.png";
import { cn } from "@/utils/component-utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ComponentPropsWithRef, useRef } from "react";

type _MainCaseSectionProps = {};

export type MainCaseSectionProps = _MainCaseSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _MainCaseSectionProps>;

function MainCaseSection({ className, ...props }: MainCaseSectionProps) {
	const parentRef = useRef<HTMLImageElement | null>(null);
	const router = useRouter();

	useFollowingCursorButton({
		parentRef: parentRef,
		buttonProps: {
			title: "See this work",
			onClick: () => {
				router.push("/project-peek");
			},
		},
	});

	return (
		<section className={cn(`relative flex md:px-12`, className)} {...props}>
			<CaseCard
				className="md:hidden"
				title="PEEK"
				href="/project-peek"
				src={MainCaseSectionCaseImg}
			/>
			<Image
				ref={parentRef}
				className="hidden rounded-2xl md:block"
				src={MainCaseSectionCaseImg}
				alt={"Main case section"}
				style={{
					width: "100%",
				}}
			/>
		</section>
	);
}

export default MainCaseSection;
