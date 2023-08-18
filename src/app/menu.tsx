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

	return menuIsActive ? (
		<div className={cn(`fixed inset-0 z-40`, className)} {...props}>
			<div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center bg-black">
				<ul className="flex flex-col gap-4 text-8xl">
					{LINKS.map(({ href, title }) => (
						<li
							key={href}
							className="hover:text-primary cursor-pointer hover:underline"
						>
							<Link href={href} onClick={(e) => handleClick(e, href)}>
								{title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	) : null;
}

export default Menu;
