"use client";

import menuIsActiveAtom from "@/atoms/menuIsActiveAtom";
import Logo from "@/components/Logo";
import { cn } from "@/utils/component-utils";
import { useAtom } from "jotai";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

type _NavbarProps = {};

export type NavbarProps = _NavbarProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"nav">>, keyof _NavbarProps>;

function Navbar({ className, children, ...props }: NavbarProps) {
	const [menuIsActive, setMenuIsActive] = useAtom(menuIsActiveAtom);
	const menuTitle = !menuIsActive ? "Menu" : "Close";
	return (
		<nav className={cn(`fixed z-50 w-full p-4 md:px-12 md:py-8`, className)} {...props}>
			<div className="flex w-full justify-between">
				<Logo />
				<div
					onClick={() => setMenuIsActive((isActive) => !isActive)}
					className="text-primary cursor-pointer text-base md:text-lg"
				>
					{menuTitle}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
