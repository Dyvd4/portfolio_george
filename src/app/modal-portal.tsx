"use client";

import modalIsActiveAtom from "@/atoms/modalIsActiveAtom";
import { cn } from "@/utils/component-utils";
import { useAtom } from "jotai";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

type _ModalCoverProps = {};
export type ModalCoverProps = _ModalCoverProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"div">>, keyof _ModalCoverProps>;

function ModalCover({ className, children, ...props }: ModalCoverProps) {
	const [modalIsActive] = useAtom(modalIsActiveAtom);
	return (
		<div
			id="modal-portal"
			style={{
				backdropFilter: "blur(8px)",
			}}
			className={cn(
				`invisible fixed inset-0 z-40 flex items-center justify-center bg-[rgba(17,17,17,0.64)]
				opacity-0 transition-all duration-500`,
				{
					"visible opacity-100": !!modalIsActive,
				},
				className
			)}
			{...props}
		></div>
	);
}

export default ModalCover;
