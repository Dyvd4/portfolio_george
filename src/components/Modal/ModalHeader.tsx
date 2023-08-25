"use client";

import modalIsActiveAtom from "@/atoms/modalIsActiveAtom";
import Times from "@/components/icons/Times";
import { cn } from "@/utils/component-utils";
import { useAtom } from "jotai";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

type _ModalHeaderProps = {};

export type ModalHeaderProps = _ModalHeaderProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"h1">>, keyof _ModalHeaderProps>;

function ModalHeader({ className, children, ...props }: ModalHeaderProps) {
	const [, setModalIsActive] = useAtom(modalIsActiveAtom);
	return (
		<h1
			className={cn(`flex w-[576px] items-center justify-between text-2xl`, className)}
			{...props}
		>
			{children}
			<Times onClick={() => setModalIsActive(false)} />
		</h1>
	);
}

export { ModalHeader };
