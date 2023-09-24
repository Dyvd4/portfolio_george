"use client";

import footerIsActiveAtom from "@/atoms/footerIsActiveAtom";
import modalIsActiveAtom from "@/atoms/modalIsActiveAtom";
import Copyable from "@/components/Copyable";
import DevSign from "@/components/DevSign";
import SocialLinks from "@/components/SocialLinks";
import Button from "@/components/buttons/Button";
import { cn } from "@/utils/component-utils";
import { useAtom } from "jotai";
import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { toast } from "react-hot-toast";
import ContactModal from "../Modals/ContactModal";

type _FooterProps = {};

export type FooterProps = _FooterProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"footer">>, keyof _FooterProps>;

function Footer({ className, children, ...props }: FooterProps) {
	const [, setModalIsActive] = useAtom(modalIsActiveAtom);
	const [footerIsActive] = useAtom(footerIsActiveAtom);

	const handleCopyClick = () => toast.success("Copied");

	return !!footerIsActive ? (
		<>
			<footer
				id="footer"
				className={cn(`flex flex-col justify-center gap-32 md:gap-[360px]`, className)}
				{...props}
			>
				<div className="flex flex-col items-center gap-6">
					<Copyable onClick={handleCopyClick}>
						<h1 className="text-primary text-[32px] leading-[150%] underline md:text-[88px]">
							hello@itsgeorge.com
						</h1>
					</Copyable>
					<Button onClick={() => setModalIsActive(true)}>Contact form</Button>
				</div>
				<div className="hidden items-center justify-between px-12 py-8 md:flex">
					<SocialLinks className="gap-8" />
					<DevSign />
					<div className="text-secondary text-sm">© 2023 George Palkin</div>
				</div>
				<div className="flex flex-col items-center gap-10 px-4 py-8 md:hidden md:flex-row md:gap-0">
					<SocialLinks className="gap-8" />
					<div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
						<DevSign />
						<div className="text-secondary text-sm">© 2023 George Palkin</div>
					</div>
				</div>
			</footer>
			<ContactModal />
		</>
	) : null;
}

export default Footer;
