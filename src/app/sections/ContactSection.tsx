"use client";

import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { cn } from "@/utils/component-utils";
import Button from "@/components/buttons/Button";

type _ContactSectionProps = {};

export type ContactSectionProps = _ContactSectionProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"section">>, keyof _ContactSectionProps>;

function ContactSection({ className, children, ...props }: ContactSectionProps) {
	return (
		<section className={cn(`relative min-h-screen`, className)} {...props}>
			<div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-8">
				<h1 className="text-primary text-8xl">hello@itsgeorge.com</h1>
				<Button>Contact form</Button>
			</div>
		</section>
	);
}

export default ContactSection;