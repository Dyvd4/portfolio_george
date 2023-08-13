import Image from "next/image";
import { ComponentPropsWithRef, PropsWithChildren } from 'react';
import { cn } from '@/utils/component-utils';

type _NavbarProps = {}

export type NavbarProps = _NavbarProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<'nav'>>, keyof _NavbarProps>

function Navbar({ className, children, ...props }: NavbarProps) {
	return (
		<nav
			className={cn(`flex justify-between py-8 px-12 fixed w-full`, className)}
			{...props}>
			<Image
				src="/Logo.svg"
				alt="Logo"
				width={32}
				height={32}
				priority
			/>
			<div className="text-lg">
				Menu
			</div>
		</nav>
	);
}

export default Navbar;