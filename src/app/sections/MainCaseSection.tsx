import useFollowingCursorButton from "@/hooks/useFollowingCursorButton";
import { cn } from "@/utils/component-utils";
import { useRouter } from "next/navigation";
import { ComponentPropsWithRef, useRef } from "react";

type _MainCaseSectionProps = {};

export type MainCaseSectionProps = _MainCaseSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _MainCaseSectionProps>;

function MainCaseSection({ className, ...props }: MainCaseSectionProps) {
	const parentRef = useRef<HTMLDivElement | null>(null);
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
			<div
				ref={parentRef}
				className="flex h-[1026px] w-[1824px] rounded-2xl"
				style={{
					backgroundSize: "cover",
					backgroundImage: "url(main-case-section_case.png)",
				}}
			></div>
		</section>
	);
}

export default MainCaseSection;
