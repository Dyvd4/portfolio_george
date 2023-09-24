import Button from "@/components/buttons/Button";
import DawnImg from "@/public/Dawn.svg";
import SpiralOneImg from "@/public/Spiral 1.svg";
import SpiralThreeImg from "@/public/Spiral 3.svg";
import { cn } from "@/utils/component-utils";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";
import { ABOUT_ME_HREF } from "../menu";

type _AboutMeSectionProps = {};

export type AboutMeSectionProps = _AboutMeSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _AboutMeSectionProps>;

function AboutMeSection({ className, ...props }: AboutMeSectionProps) {
	return (
		<section
			className={cn(
				`relative flex flex-col items-center gap-6 overflow-hidden
                 px-4 py-[256px] md:min-h-screen md:px-[360px]
				 md:py-[440px]`,
				className
			)}
			{...props}
		>
			<h1 className="text-center text-2xl !leading-[150%] tracking-[-0.36px] md:text-7xl">
				I empower companies through problem-solving and exceptional user experiences.
			</h1>
			<Link rel="noreferrer noopener" target={"_blank"} href={ABOUT_ME_HREF}>
				<Button className="w-fit">More about me</Button>
			</Link>
			<Image
				className="absolute left-4 top-10 h-20 w-[38px] md:left-[169.024px] md:top-[151.968px] md:h-[156px] md:w-[127px]"
				src={SpiralThreeImg}
				alt="spiral 3"
			/>
			<Image
				className="absolute -right-6 top-[144px] h-[70px] w-16 md:right-[48px] md:top-[379px] md:h-[125px] md:w-[132px]"
				src={SpiralOneImg}
				alt="spiral 1"
			/>
			<Image
				className="absolute bottom-10 left-20 h-20 w-20 md:bottom-[128px] md:left-[560px] md:h-32 md:w-32"
				src={DawnImg}
				alt="dawn"
			/>
		</section>
	);
}

export default AboutMeSection;
