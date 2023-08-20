import Button from "@/components/buttons/Button";
import { cn } from "@/utils/component-utils";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";

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
			<Link href={"/about-me"}>
				<Button className="w-fit">More about me</Button>
			</Link>
			<Image
				className="absolute left-[169.024px] top-[151.968px]"
				src={"/Spiral 3.svg"}
				alt="spiral 3"
				width={127}
				height={156}
			/>
			<Image
				className="absolute right-[48px] top-[379px]"
				src={"/Spiral 1.svg"}
				alt="spiral 1"
				width={132}
				height={125}
			/>
			<Image
				className="absolute bottom-[128px] left-[560px]"
				src={"/Dawn.svg"}
				alt="dawn"
				width={132}
				height={125}
			/>
		</section>
	);
}

export default AboutMeSection;
