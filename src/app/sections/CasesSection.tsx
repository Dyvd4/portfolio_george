import CaseCard from "@/components/CaseCard";
import { _CaseCardProps } from "@/components/CaseCard/CaseCard";
import { getTwoDArray } from "@/utils/array-utils";
import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef } from "react";
import YandexMatchImg from "@/public/case-images/Yandex-Match.png";
import RubleBrothersImg from "@/public/case-images/Ruble-Brothers.png";

const CASES: Array<_CaseCardProps> = [
	{ title: "Yandex Match", src: YandexMatchImg, href: "/project-yandex" },
	{
		title: "Ruble Brothers",
		src: RubleBrothersImg,
		href: "/project-ruble-brothers",
	},
];

type _CasesSectionProps = {};

export type CasesSectionProps = _CasesSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _CasesSectionProps>;

function CasesSection({ className, ...props }: CasesSectionProps) {
	return (
		<section id="cases" className={cn(``, className)} {...props}>
			{getTwoDArray(CASES, 2).map((cards, i) => (
				<div className="flex gap-12 px-12" key={i}>
					{cards.map((caseCardProps, i) =>
						i % 2 === 1 ? (
							<CaseCard
								className="flex flex-col pt-20"
								key={caseCardProps.title}
								{...caseCardProps}
							/>
						) : (
							<CaseCard key={caseCardProps.title} {...caseCardProps} />
						)
					)}
				</div>
			))}
		</section>
	);
}

export default CasesSection;
