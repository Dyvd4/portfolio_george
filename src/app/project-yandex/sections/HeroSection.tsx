import Button from "@/components/buttons/Button";
import { cn } from "@/utils/component-utils";
import Image from "next/image";
import { Metadata } from "next/types";
import { ComponentPropsWithRef } from "react";

type _HeroSectionProps = {};

export type HeroSectionProps = _HeroSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _HeroSectionProps>;

export const metadata: Metadata = {
	title: "Yandex",
	description:
		"Yandex Match is a new dating service that can help you find a person with similar hobbies thanks to the new feature — «Maximum Match»!",
	keywords: ["design", "dating service", "Maximum Match", "yandex"],
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
				src={"/project-yandex/Logotype.svg"}
				width={1824}
				height={333}
				style={{
					width: "100%",
				}}
			/>
			<div className="flex justify-between">
				<p className="text-lg">
					Yandex Match is a new dating service that can help you find a person <br />
					with similar hobbies thanks to the new feature — «Maximum Match»!
				</p>
				<div className="flex flex-col justify-end">
					<Button disabled>Visit the website</Button>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
