import Button from "@/components/buttons/Button";
import { cn } from "@/utils/component-utils";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";
import HeroSectionSmileImg from "@/public/hero-section_1st-row_smile.svg";
import HeroSectionSwitchImg from "@/public/hero-section_2nd-row_switch.svg";

type _HeroSectionProps = {};

export type HeroSectionProps = _HeroSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _HeroSectionProps>;

function HeroSection({ className, ...props }: HeroSectionProps) {
	return (
		<section
			className={cn(
				`relative flex flex-col items-center justify-center gap-6 px-4 pb-16 pt-32 md:min-h-screen
                 md:px-0 md:py-0`,
				className
			)}
			{...props}
		>
			<div
				className="flex flex-col items-start justify-center 
                            text-3xl !leading-[130%] tracking-[-1.28px] md:text-9xl"
			>
				<h1>
					Crafting <i className="pr-2 md:pr-4">friendly</i> and
				</h1>
				<h1 className="flex items-center gap-3 pl-4 md:gap-12">
					<Image
						className="md:hidden"
						width={26}
						height={26}
						style={{
							filter: "drop-shadow(0px 12px 64px rgba(96, 83, 248, 0.64))",
						}}
						src={HeroSectionSmileImg}
						alt="smile"
					/>
					<Image
						className="hidden pt-4 md:inline"
						width={98}
						height={98}
						style={{
							filter: "drop-shadow(0px 12px 64px rgba(96, 83, 248, 0.64))",
						}}
						src={HeroSectionSmileImg}
						alt="smile"
					/>
					<div>
						<i className="pr-2 md:pr-4">intuitive</i> interfaces
					</div>
				</h1>
				<h1 className="flex items-center gap-3 md:gap-12">
					<div>
						with <i className="pr-2 md:pr-4">creative</i> flair
					</div>
					<Image
						className="pt-2 md:hidden"
						width={46}
						height={22}
						style={{
							filter: "drop-shadow(0px 12px 64px rgba(96, 83, 248, 0.64))",
						}}
						src={HeroSectionSwitchImg}
						alt="switch"
					/>
					<Image
						className="hidden pt-6 md:inline"
						width={170}
						height={80}
						style={{
							filter: "drop-shadow(0px 12px 64px rgba(96, 83, 248, 0.64))",
						}}
						src={HeroSectionSwitchImg}
						alt="switch"
					/>
				</h1>
			</div>
			<Link href={"#footer"}>
				<Button>Start a project</Button>
			</Link>
		</section>
	);
}

export default HeroSection;
