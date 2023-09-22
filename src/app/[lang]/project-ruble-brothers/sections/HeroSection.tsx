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
			<Image
				priority
				alt="Logotype"
				src={"/project-ruble-brothers/Logotype.svg"}
				width={1824}
				height={333}
				style={{
					width: "100%",
				}}
			/>
			<div className="flex justify-between">
				<p className="text-lg">
					Presenting a money exchange landing page design that is intuitive,
					<br />
					user-friendly, and modern. Our design will make it easy for customers <br />
					to quickly and securely exchange money.
				</p>
				<div className="flex flex-col justify-end">
					<Button disabled>Visit the website</Button>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
