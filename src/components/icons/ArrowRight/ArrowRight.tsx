"use-client";

import Icon, { IconProps } from "../Icon";

type _ArrowRightProps = {};

export type ArrowRightProps = _ArrowRightProps &
	Omit<IconProps, keyof _ArrowRightProps | "src" | "alt">;

function ArrowRight({ className, ...props }: ArrowRightProps) {
	return <Icon src={"/Arrow---Right.svg"} alt={"Arrow right"} {...props} />;
}

export default ArrowRight;
