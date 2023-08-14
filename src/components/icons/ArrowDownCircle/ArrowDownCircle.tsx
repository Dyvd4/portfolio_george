"use-client";

import Icon, { IconProps } from "../Icon";

type _ArrowDownCircleProps = {};

export type ArrowDownCircleProps = _ArrowDownCircleProps &
	Omit<IconProps, keyof _ArrowDownCircleProps | "src" | "alt">;

function ArrowDownCircle({ className, ...props }: ArrowDownCircleProps) {
	return <Icon src={"/Arrow---Down-Circle.svg"} alt={"Arrow down circle"} {...props} />;
}

export default ArrowDownCircle;
