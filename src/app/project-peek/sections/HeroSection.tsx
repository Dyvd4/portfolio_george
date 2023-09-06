import Button from "@/components/buttons/Button";
import { cn } from "@/utils/component-utils";
import Image from "next/image";
import { ComponentPropsWithRef } from "react";

type _HeroSectionProps = {};

export type HeroSectionProps = _HeroSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _HeroSectionProps>;

function HeroSection({ className, ...props }: HeroSectionProps) {
	return (
		<section
			className={cn(`flex h-screen flex-col justify-between px-12 pb-10 pt-28`, className)}
			{...props}
		>
			<Image alt="Logotype" src={"/project-peek/Logotype.svg"} width={1824} height={333} />
			<div className="flex justify-between">
				<p>
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
