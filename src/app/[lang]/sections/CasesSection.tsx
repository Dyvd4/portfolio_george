import CaseCard from "@/components/CaseCard";
import { _CaseCardProps } from "@/components/CaseCard/CaseCard";
import RubleBrothersImg from "@/public/case-images/Ruble-Brothers.png";
import YandexMatchImg from "@/public/case-images/Yandex-Match.png";
import { getTwoDArray } from "@/utils/array-utils";
import { cn } from "@/utils/component-utils";
import { getLocaleHref } from "@/utils/link-utils";
import { ComponentPropsWithRef } from "react";

const CASES: Array<_CaseCardProps> = [
	{ title: "Yandex Match", src: YandexMatchImg, href: getLocaleHref("/project-yandex") },
	{
		title: "Ruble Brothers",
		src: RubleBrothersImg,
		href: getLocaleHref("/project-ruble-brothers"),
	},
];

type _CasesSectionProps = {};

export type CasesSectionProps = _CasesSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _CasesSectionProps>;

function CasesSection({ className, ...props }: CasesSectionProps) {
	return (
		<section id="cases" className={cn(``, className)} {...props}>
			{getTwoDArray(CASES, 2).map((cards, i) => (
				<div className="flex flex-col gap-12 lg:flex-row lg:px-12" key={i}>
					{cards.map((caseCardProps, i) =>
						i % 2 === 1 ? (
							<CaseCard
								className="flex flex-col lg:pt-20"
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
