"use-client";

import { cn } from "@/utils/component-utils";
import Icon, { IconProps } from "../Icon";

type _ArrowDownCircleProps = {};

export type ArrowDownCircleProps = _ArrowDownCircleProps &
	Omit<IconProps, keyof _ArrowDownCircleProps>;

function ArrowDownCircle({ className, ...props }: ArrowDownCircleProps) {
	return (
		<Icon className={cn(``, className)} {...props}>
			<>
				<g id="Name=ArrowDownCircle" clipPath="url(#clip0_1_78)">
					<path
						id="Vector"
						d="M22 7H15V5H22V7ZM23.726 17C23.284 18.297 21.697 20 18.625 20C15.551 20 13.061 18.271 13.061 14.325C13.061 10.415 15.386 8.405 18.527 8.405C21.609 8.405 23.491 10.187 23.902 12.831C23.98 13.337 24.011 14.019 23.997 14.971H15.97C16.1 18.182 19.453 18.283 20.558 17H23.726ZM16.04 13H21.005C20.9 11.453 19.869 10.781 18.528 10.781C17.062 10.781 16.251 11.549 16.04 13ZM6.466 19.988H0V5.021H6.953C12.429 5.102 12.533 10.465 9.673 11.927C13.134 13.187 13.25 19.988 6.466 19.988ZM3 11H6.584C9.092 11 9.49 8 6.272 8H3V11ZM6.391 14H3V17.016H6.341C9.396 17.016 9.209 14 6.391 14Z"
					></path>
				</g>
				<defs>
					<clipPath id="clip0_1_78">
						<rect width={24} height={24} fill="white"></rect>
					</clipPath>
				</defs>
			</>
		</Icon>
	);
}

export default ArrowDownCircle;
