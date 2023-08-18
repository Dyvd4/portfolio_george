"use client";

import { ComponentPropsWithRef } from "react";
import { createPortal } from "react-dom";

type LoadingIndicatorProps = {} & ComponentPropsWithRef<"span">;

function LoadingIndicator({ ...props }: LoadingIndicatorProps) {
	return createPortal(
		<span
			className="loading-circle
						border-black after:border-black 
						dark:border-white after:dark:border-white"
			{...props}
		></span>,
		document.getElementById("loading-portal")!
	);
}

export default LoadingIndicator;
