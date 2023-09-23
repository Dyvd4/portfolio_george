"use client";

import menuIsActiveAtom from "@/atoms/menuIsActiveAtom";
import SocialLinks from "@/components/SocialLinks";
import { cn } from "@/utils/component-utils";
import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ComponentPropsWithRef, PropsWithChildren, useEffect } from "react";

export type Link = { href: string; title: string; target?: string };

export const ABOUT_ME_HREF =
	"https://niklapinv.notion.site/George-Palkin-Resume-10a727f21ccd405195712547bf9f698c?pvs=4";
const LINKS: Array<Link> = [
	{
		title: "Work",
		href: "/#cases",
	},
	{
		title: "About me",
		href: ABOUT_ME_HREF,
		target: "_blank",
	},
	{
		title: "F.A.Q",
		href: "/#faqs",
	},
	{
		title: "Contact me",
		href: "/#footer",
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

	const handleLinkClick = (e, href: string) => {
		e.preventDefault();
		router.push(href);
		setMenuIsActive(false);
	};

	return (
		<div
			className={cn(
				`fixed inset-0 z-40 flex
				-translate-y-full transform items-center 
				justify-center bg-black transition-all duration-700`,
				{
					"translate-y-0": menuIsActive,
				},
				className
			)}
			{...props}
		>
			<div
				className="flex w-[1200px] flex-col items-center justify-between 
			sm:px-0 md:flex-row md:items-end md:px-20 xl:p-0"
			>
				<ul className="flex flex-col gap-6 text-6xl leading-[150%] md:gap-8 md:text-8xl">
					{LINKS.map(({ href, title, target }) => (
						<li
							key={href}
							className="hover:text-primary flex cursor-pointer
									items-end justify-center hover:underline md:justify-start"
						>
							<Link
								rel="noreferrer noopener"
								target={target}
								href={href}
								onClick={
									target === "_blank"
										? undefined
										: (e) => handleLinkClick(e, href)
								}
							>
								{title}
							</Link>
						</li>
					))}
				</ul>
				<div className="mb-5 hidden items-end md:flex">
					<SocialLinks />
				</div>
			</div>
			<div className="absolute bottom-0 mx-auto pb-24 md:hidden">
				<SocialLinks />
			</div>
		</div>
	);
}

export default Menu;
