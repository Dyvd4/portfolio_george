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
					{LINKS.map(({ href, title, target }) => (
						<li
							key={href}
							className="hover:text-primary flex cursor-pointer items-end justify-between hover:underline"
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
				<div className="flex items-end">
					<SocialLinks />
				</div>
			</div>
		</div>
	);
}

export default Menu;
