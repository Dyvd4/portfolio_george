import CaseCard from "@/components/CaseCard";
import { getTwoDArray } from "@/utils/array-utils";
import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef } from "react";
import yandexMatchImage from "../../../public/Yandex-Match.png";
import rubleBrothersImage from "../../../public/Ruble-Brothers.png";

const CASES: Array<{ title: string; src: string }> = [
	{ title: "Yandex Match", src: yandexMatchImage },
	{ title: "Ruble Brothers", src: rubleBrothersImage },
];

type _CasesSectionProps = {};

export type CasesSectionProps = _CasesSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _CasesSectionProps>;

function CasesSection({ className, ...props }: CasesSectionProps) {
	return (
		<section id="cases" className={cn(``, className)} {...props}>
			{getTwoDArray(CASES, 2).map((cards, i) => (
				<div className="flex gap-12 px-12" key={i}>
					{cards.map(({ title, src }, i) =>
						i % 2 === 1 ? (
							<div className="flex-start flex flex-col pt-20" key={title}>
								<CaseCard key={title} title={title} src={src} />
							</div>
						) : (
							<CaseCard key={title} title={title} src={src} />
						)
					)}
				</div>
			))}
		</section>
	);
}

export default CasesSection;
