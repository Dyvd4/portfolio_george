"use client";

import menuIsActiveAtom from "@/atoms/menuIsActiveAtom";
import { Behance, Dribble, Telegram } from "@/components/icons";
import { cn } from "@/utils/component-utils";
import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ComponentPropsWithRef, PropsWithChildren, useEffect } from "react";

type Links = { href: string; title: string };

const LINKS: Array<Links> = [
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

type _MenuProps = {};
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
				bg-black transition-all duration-700`,
				{
					"translate-y-0": menuIsActive,
				},
				className
			)}
			{...props}
		>
			<div className="flex w-[1200px] justify-between">
				<ul className="flex flex-col gap-8 text-8xl leading-[132px]">
					{LINKS.map(({ href, title }) => (
						<li
							key={href}
							className="hover:text-primary flex cursor-pointer items-end justify-between hover:underline"
						>
							<Link href={href} onClick={(e) => handleClick(e, href)}>
								{title}
							</Link>
						</li>
					))}
				</ul>
				<div className="flex items-end">
					<ul className="flex gap-6">
						<li key={"Telegram"}>
							<Telegram variant="secondary" />
						</li>
						<li key={"Behance"}>
							<Behance variant="secondary" />
						</li>
						<li key={"Dribble"}>
							<Dribble variant="secondary" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Menu;
