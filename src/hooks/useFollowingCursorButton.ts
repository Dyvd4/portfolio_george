import { MutableRefObject, useEffect, useRef } from "react";

type Options = {
	parentRef: MutableRefObject<HTMLElement | null>;
	buttonProps: {
		title: string;
		onClick?: GlobalEventHandlers["onclick"];
	};
};

const setInitialButtonStyle = (button: HTMLButtonElement) => {
	const buttonStyle = button.style;
	buttonStyle.visibility = "hidden";
	buttonStyle.transitionDuration = "0s";
	buttonStyle.cursor = "none";
	buttonStyle.zIndex = "100";
	buttonStyle.position = "absolute";
};

const updateButtonPosition = (
	e: MouseEvent,
	button: HTMLButtonElement,
	parentElement: HTMLElement
) => {
	const rect = parentElement.getBoundingClientRect()!;
	const isWithinParent =
		e.clientX < rect.right &&
		e.clientX > rect.left &&
		e.clientY < rect.bottom &&
		e.clientY > rect.top;
	if (!isWithinParent) {
		setInitialButtonStyle(button);
		return;
	}
	const mouseX = e.clientX;
	const mouseY = e.pageY;
	const transform = `translate(-50%, -50%) translate(${mouseX}px, ${mouseY}px)`;
	button.style.visibility = "visible";
	button.style.transform = transform;
};

const useFollowingCursorButtonStyles = ({ parentRef, buttonProps }: Options) => {
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	const handleMouseMove = (e: MouseEvent) => {
		updateButtonPosition(e, buttonRef.current!, parentRef.current!);
	};

	useEffect(() => {
		const button = document.getElementById("button-cursor")! as HTMLButtonElement;
		buttonRef.current = button;
		button.innerText = buttonProps.title;
		button.onclick = buttonProps.onClick || null;
		setInitialButtonStyle(button);

		window!.addEventListener("mousemove", handleMouseMove);

		return () => {
			window!.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
};

export default useFollowingCursorButtonStyles;
