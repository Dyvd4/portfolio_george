"use-client";

import Icon, { IconProps } from "../Icon";

type _CopyProps = {};

export type CopyProps = _CopyProps & Omit<IconProps, keyof _CopyProps | "src" | "alt">;

function Copy({ className, ...props }: CopyProps) {
	return <Icon src={"/Copy.svg"} alt={"Copy"} {...props} />;
}

export default Copy;
