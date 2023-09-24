import Expandable from "@/components/Expandable";
import HeavyWavesImg from "@/public/Heavy Waves.svg";
import SpiralTwoImg from "@/public/Spiral 2.svg";
import TransparencyImg from "@/public/Transparency.svg";
import { cn } from "@/utils/component-utils";
import Image from "next/image";
import { ComponentPropsWithRef } from "react";

const FAQs: Array<{ title: string; description: string }> = [
	{
		title: "Do I get fully working website at the end?",
		description:
			"As a UX/UI designer, I specialize in creating the visual design and user interface. While I focus on the design aspect, I collaborate with a skilled team of web developers who are responsible for bringing the design to life through development and coding.",
	},
	{
		title: "How do you handle design revisions?",
		description:
			"I value open communication and collaboration with clients. I take the time to understand your feedback and incorporate it into the design. I provide explanations of design choices, present alternative solutions when needed, and work closely with you to reach a design solution that meets your expectations.",
	},
	{
		title: "Do you provide design documentation?",
		description:
			"I provide design documentation and style guides to ensure ease of development and to facilitate understanding of the design.",
	},
	{
		title: "How you implement our brand identity?",
		description:
			"I ensure your brand identity and message are effectively communicated through thoughtful design choices and brand-aligned visual elements.",
	},
	{
		title: "Do you offer post-design support?",
		description:
			"I offer post-design support during the implementation phase to address any design-related questions or concerns.",
	},
	{
		title: "How do you take payment?",
		description:
			"I take 50% upfront and the remaining 50% after the design is finalized. For clients in Russia, I accept any payment method. However, please note that I can only accept crypto-transactions from clients outside Russia as SWIFT transactions are blocked.",
	},
];

type _FaqSectionProps = {};

export type FaqSectionProps = _FaqSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _FaqSectionProps>;

function FaqSection({ className, children, ...props }: FaqSectionProps) {
	return (
		<>
			<section
				id="faqs"
				className={cn(
					`relative flex flex-col items-center justify-center gap-10
					overflow-hidden px-4 py-[256px] lg:px-0 lg:py-[440px]`,
					className
				)}
				{...props}
			>
				<h1 className="text-4xl leading-[108%] lg:text-7xl">FAQ&apos;s</h1>
				<ul className="flex flex-col gap-4">
					{FAQs.map(({ title, description }) => (
						<li key={title}>
							<Expandable title={title} description={description} />
						</li>
					))}
				</ul>
				<Image
					className="absolute -right-4 top-[132px] h-20 w-16 lg:left-[340.833px] lg:top-[295.074px] lg:h-[123px] lg:w-[108px]"
					src={SpiralTwoImg}
					alt="spiral 2"
				/>
				<Image
					className="absolute right-20 top-[900px] h-20 w-20 lg:right-[204px] lg:top-[800px] lg:h-32 lg:w-32"
					src={TransparencyImg}
					alt="Transparency"
				/>
				<Image
					className="absolute left-6 top-11 h-14 w-20 lg:left-[206.074px] lg:top-[1180px] lg:h-[84px] lg:w-[118px]"
					src={HeavyWavesImg}
					alt="Heavy waves"
				/>
			</section>
		</>
	);
}

export default FaqSection;
