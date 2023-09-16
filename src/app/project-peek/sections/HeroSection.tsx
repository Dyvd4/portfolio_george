import Button from "@/components/buttons/Button";
import { cn } from "@/utils/component-utils";
import Image from "next/image";
import { Metadata } from "next/types";
import { ComponentPropsWithRef } from "react";

type _HeroSectionProps = {};

export type HeroSectionProps = _HeroSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _HeroSectionProps>;

export const metadata: Metadata = {
	title: "Peek",
	description:
		"Revolutionizing design and function, the project showcases a cutting-edge smart speaker concept. During this project I designed an adaptive website, 3D models and animations that transport users into an immersive visual realm.",
	keywords: ["design", "cutting-edge", "smart speaker", "3D models", "peek"],
};
function HeroSection({ className, ...props }: HeroSectionProps) {
	return (
		<section
			className={cn(`flex h-screen flex-col justify-between px-12 pb-10 pt-28`, className)}
			{...props}
		>
			<Image
				priority
				alt="Logotype"
				src={"/project-peek/Logotype.svg"}
				width={1824}
				height={333}
				style={{
					width: "100%",
				}}
			/>
			<div className="flex justify-between">
				<p className="text-lg">
					Revolutionizing design and function, the project showcases a cutting <br />
					-edge smart speaker concept. During this project I designed <br /> an adaptive
					website, 3D models and animations that transport users <br />
					into an immersive visual realm.
				</p>
				<div className="flex flex-col justify-end">
					<Button disabled>Visit the website</Button>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
