"use client";

import menuIsActiveAtom from "@/atoms/menuIsActiveAtom";
import { cn } from "@/utils/component-utils";
import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ComponentPropsWithRef, PropsWithChildren, useEffect } from "react";

type _MenuProps = {};

const LINKS: Array<{ href: string; title: string }> = [
	{
		href: "/work",
		title: "Work",
	},
	{
		href: "/about-me",
		title: "About me",
	},
	{
		href: "/faq",
		title: "F.A.Q",
	},
	{
		href: "/contact",
		title: "Contact me",
	},
];

export type MenuProps = _MenuProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"div">>, keyof _MenuProps>;

function Menu({ className, children, ...props }: MenuProps) {
	const [menuIsActive, setMenuIsActive] = useAtom(menuIsActiveAtom);
	const router = useRouter();

	useEffect(() => {
		if (menuIsActive) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "unset";
	}, [menuIsActive]);

	const handleClick = (e, href: string) => {
		e.preventDefault();
		router.push(href);
		setMenuIsActive(false);
	};

	return (
		<div
			className={cn(
				`fixed inset-0 z-40 flex -translate-y-full
				transform items-center justify-center 
				bg-black transition-all duration-500`,
				{
					"translate-y-0": menuIsActive,
				},
				className
			)}
			{...props}
		>
			<ul className="flex w-[1200px] flex-col gap-8 text-8xl leading-[132px]">
				{LINKS.map(({ href, title }) => (
					<li key={href} className="hover:text-primary cursor-pointer hover:underline">
						<Link href={href} onClick={(e) => handleClick(e, href)}>
							{title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Menu;
