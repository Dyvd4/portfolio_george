import Button from "@/components/buttons/Button";
import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef } from "react";

type _MainCaseSectionProps = {};

export type MainCaseSectionProps = _MainCaseSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _MainCaseSectionProps>;

function MainCaseSection({ className, ...props }: MainCaseSectionProps) {
	return (
		<section className={cn(`relative flex px-12`, className)} {...props}>
			<div
				className="flex h-[1026px] w-[1824px] rounded-2xl"
				style={{
					backgroundSize: "cover",
					background:
						"url(main-case-section_case.png), lightgray 0px -206.547px / 100% 133.333% no-repeat",
				}}
			>
				<Button
					style={{
						backdropFilter: "blur(16px)",
					}}
					className="absolute left-1/2 top-1/2 bg-[rgba(17,17,17,0.64)]"
				>
					See this work
				</Button>
			</div>
		</section>
	);
}

export default MainCaseSection;
