import Expandable from "@/components/Expandable";
import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef } from "react";
import Image from "next/image";

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
		<section
			id="faqs"
			className={cn(
				`relative flex flex-col items-center justify-center 
				gap-10 px-[672px] py-[440px]`,
				className
			)}
			{...props}
		>
			<h1 className="text-7xl">FAQ&apos;s</h1>
			<ul className="flex flex-col gap-4">
				{FAQs.map(({ title, description }) => (
					<li key={title}>
						<Expandable title={title} description={description} />
					</li>
				))}
			</ul>
			<Image
				className="absolute left-[340.833px] top-[295.074px]"
				src={"/Spiral 2.svg"}
				alt="spiral 2"
				width={108}
				height={123}
			/>
			<Image
				className="absolute bottom-[660px] right-[204px]"
				src={"/Transparency.svg"}
				alt="Transparency"
				width={128}
				height={128}
			/>
			<Image
				className="absolute bottom-[317.742px] left-[206.074px]"
				src={"/Heavy Waves.svg"}
				alt="Heavy waves"
				width={118}
				height={84}
			/>
		</section>
	);
}

export default FaqSection;
