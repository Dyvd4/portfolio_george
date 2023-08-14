"use-client";

import Icon, { IconProps } from "../Icon";

type _BehanceProps = {};

export type BehanceProps = _BehanceProps & Omit<IconProps, keyof _BehanceProps | "src" | "alt">;

function Behance({ className, ...props }: BehanceProps) {
	return <Icon src={"/Behance.svg"} alt={"Behance"} {...props} />;
}

export default Behance;
