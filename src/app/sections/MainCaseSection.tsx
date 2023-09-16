import Image from "next/image";
import useFollowingCursorButton from "@/hooks/useFollowingCursorButton";
import { cn } from "@/utils/component-utils";
import { useRouter } from "next/navigation";
import { ComponentPropsWithRef, useRef } from "react";
import MainCaseSectionCaseImg from "@/public/main-case-section_case.png";

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
		<section className={cn(`relative flex px-12`, className)} {...props}>
			<Image
				ref={parentRef}
				className="rounded-2xl"
				src={MainCaseSectionCaseImg}
				alt={"Main case section"}
			/>
		</section>
	);
}

export default MainCaseSection;
