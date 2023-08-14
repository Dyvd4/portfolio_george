"use-client";

import { Behance, Dribble, Telegram } from "@/components/icons";
import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

type _FooterProps = {};

export type FooterProps = _FooterProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"footer">>, keyof _FooterProps>;

function Footer({ className, children, ...props }: FooterProps) {
	return (
		<footer className={cn(`flex justify-between px-12 py-8`, className)} {...props}>
			<div className="flex gap-8">
				<Telegram variant="secondary" />
				<Behance variant="secondary" />
				<Dribble variant="secondary" />
			</div>
			<div className="text-secondary text-sm">
				© 2023 George Palkin. All rights reserved.
			</div>
		</footer>
	);
}

export default Footer;
