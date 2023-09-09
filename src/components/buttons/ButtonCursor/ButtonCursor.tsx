"use client";

import Button from "@/components/buttons/Button";
import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

type _ButtonCursorProps = {};

export type ButtonCursorProps = _ButtonCursorProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"div">>, keyof _ButtonCursorProps>;

function ButtonCursor({ className, children, ...props }: ButtonCursorProps) {
	return <Button className={cn(``, className)} id="button-cursor"></Button>;
}

export default ButtonCursor;
