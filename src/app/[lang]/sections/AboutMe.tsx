import Button from "@/components/buttons/Button";
import { cn } from "@/utils/component-utils";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";
import { ABOUT_ME_HREF } from "../menu";
import DawnImg from "@/public/Dawn.svg";
import SpiralOneImg from "@/public/Spiral 1.svg";
import SpiralThreeImg from "@/public/Spiral 3.svg";

type _AboutMeSectionProps = {};

export type AboutMeSectionProps = _AboutMeSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _AboutMeSectionProps>;

function AboutMeSection({ className, ...props }: AboutMeSectionProps) {
	return (
		<section
			className={cn(
				`relative flex min-h-screen flex-col items-center gap-6
                                px-[360px] py-[440px]`,
				className
			)}
			{...props}
		>
			<h1 className="text-center text-7xl leading-[150%] tracking-[-0.36px]">
				I empower companies through problem-solving and exceptional user experiences.
			</h1>
			<Link rel="noreferrer noopener" target={"_blank"} href={ABOUT_ME_HREF}>
				<Button className="w-fit">More about me</Button>
			</Link>
			<Image
				className="absolute left-[169.024px] top-[151.968px]"
				src={SpiralThreeImg}
				alt="spiral 3"
			/>
			<Image
				className="absolute right-[48px] top-[379px]"
				src={SpiralOneImg}
				alt="spiral 1"
			/>
			<Image className="absolute bottom-[128px] left-[560px]" src={DawnImg} alt="dawn" />
		</section>
	);
}

export default AboutMeSection;
