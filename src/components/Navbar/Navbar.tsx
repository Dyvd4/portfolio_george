"use client";

import Image from "next/image";
import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { cn } from "@/utils/component-utils";
import { useAtom } from "jotai";
import menuIsActiveAtom from "@/atoms/menuIsActiveAtom";

type _NavbarProps = {};

export type NavbarProps = _NavbarProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"nav">>, keyof _NavbarProps>;

function Navbar({ className, children, ...props }: NavbarProps) {
	const [menuIsActive, setMenuIsActive] = useAtom(menuIsActiveAtom);
	const menuTitle = !menuIsActive ? "Menu" : "Close";
	return (
		<nav
			className={cn(`fixed z-50 flex w-full justify-between px-12 py-8`, className)}
			{...props}
		>
			<Image src="/Logo.svg" alt="Logo" width={32} height={32} priority />
			<div
				onClick={() => setMenuIsActive((isActive) => !isActive)}
				className="text-primary cursor-pointer text-lg"
			>
				{menuTitle}
			</div>
		</nav>
	);
}

export default Navbar;
