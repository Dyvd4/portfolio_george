import Button from "@/components/buttons/Button";
import { Behance, Dribble, Telegram } from "@/components/icons";
import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

type _FooterProps = {};

export type FooterProps = _FooterProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"footer">>, keyof _FooterProps>;

function Footer({ className, children, ...props }: FooterProps) {
	return (
		<footer className={cn(`flex flex-col justify-center gap-[360px]`, className)} {...props}>
			<div className="flex flex-col items-center gap-8">
				<h1 className="text-primary text-8xl">hello@itsgeorge.com</h1>
				<Button>Contact form</Button>
			</div>
			<div className="flex justify-between px-12 py-8">
				<div className="flex gap-8">
					<Telegram variant="secondary" />
					<Behance variant="secondary" />
					<Dribble variant="secondary" />
				</div>
				<div className="text-secondary text-sm">
					© 2023 George Palkin. All rights reserved.
				</div>
			</div>
		</footer>
	);
}

export default Footer;
