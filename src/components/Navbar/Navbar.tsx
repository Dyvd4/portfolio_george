import Image from "next/image";
import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { cn } from "@/utils/component-utils";

type _NavbarProps = {};

export type NavbarProps = _NavbarProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"nav">>, keyof _NavbarProps>;

function Navbar({ className, children, ...props }: NavbarProps) {
	return (
		<nav className={cn(`fixed flex w-full justify-between px-12 py-8`, className)} {...props}>
			<Image src="/Logo.svg" alt="Logo" width={32} height={32} priority />
			<div className="text-primary text-lg">Menu</div>
		</nav>
	);
}

export default Navbar;
