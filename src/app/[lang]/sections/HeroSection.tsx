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
				`relative flex min-h-screen flex-col items-center
                 justify-center gap-6`,
				className
			)}
			{...props}
		>
			<div
				className="flex flex-col items-start justify-center 
                            text-9xl leading-[130%] tracking-[-1.28px]"
			>
				<h1>
					Crafting <i className="pr-4">friendly</i> and
				</h1>
				<h1 className="flex items-center gap-12 pl-4">
					<Image
						style={{
							filter: "drop-shadow(0px 12px 64px rgba(96, 83, 248, 0.64))",
						}}
						className="pt-4"
						src={HeroSectionSmileImg}
						alt="smile"
					/>
					<div>
						<i className="pr-4">intuitive</i> interfaces
					</div>
				</h1>
				<h1 className="flex items-center gap-12">
					<div>
						with <i className="pr-4">creative</i> flair
					</div>
					<Image
						style={{
							filter: "drop-shadow(0px 12px 64px rgba(96, 83, 248, 0.64))",
						}}
						className="pt-6"
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
