"use-client";

import Icon, { IconProps } from "../Icon";

type _TelegramProps = {};

export type TelegramProps = _TelegramProps & Omit<IconProps, keyof _TelegramProps | "src" | "alt">;

function Telegram({ className, ...props }: TelegramProps) {
	return <Icon src={"/Telegram.svg"} alt={"Telegram"} {...props} />;
}

export default Telegram;
