"use-client";

import Icon, { IconProps } from "../Icon";

type _DribbleProps = {};

export type DribbleProps = _DribbleProps & Omit<IconProps, keyof _DribbleProps | "src" | "alt">;

function Dribble({ className, ...props }: DribbleProps) {
	return <Icon src={"/Dribbble.svg"} alt={"Dribbble"} {...props} />;
}

export default Dribble;
