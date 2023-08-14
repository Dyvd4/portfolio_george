"use-client";

import { cn } from "@/utils/component-utils";
import Icon, { IconProps } from "../Icon";

type _TelegramProps = {};

export type TelegramProps = _TelegramProps & Omit<IconProps, keyof _TelegramProps>;

function Telegram({ className, ...props }: TelegramProps) {
	return (
		<Icon className={cn(``, className)} {...props}>
			<>
				<g id="Name=Telegram" clipPath="url(#clip0_1_80)">
					<path
						id="telegram-1"
						fillRule="evenodd"
						clipRule="evenodd"
						d="M18.384 22.779C18.706 23.007 19.121 23.064 19.491 22.924C19.861 22.783 20.133 22.467 20.215 22.084C21.084 18 23.192 7.66303 23.983 3.94803C24.043 3.66803 23.943 3.37703 23.723 3.19003C23.503 3.00303 23.198 2.94903 22.926 3.05003C18.733 4.60203 5.82003 9.44703 0.542032 11.4C0.207032 11.524 -0.0109684 11.846 3.16428e-05 12.199C0.0120316 12.553 0.250032 12.86 0.593032 12.963C2.96003 13.671 6.06703 14.656 6.06703 14.656C6.06703 14.656 7.51903 19.041 8.27603 21.271C8.37103 21.551 8.59003 21.771 8.87903 21.847C9.16703 21.922 9.47503 21.843 9.69003 21.64C10.906 20.492 12.786 18.717 12.786 18.717C12.786 18.717 16.358 21.336 18.384 22.779ZM7.37403 14.102L9.05303 19.64L9.42603 16.133C9.42603 16.133 15.913 10.282 19.611 6.94703C19.719 6.84903 19.734 6.68503 19.644 6.57003C19.555 6.45503 19.391 6.42803 19.268 6.50603C14.982 9.24303 7.37403 14.102 7.37403 14.102Z"
					></path>
				</g>
				<defs>
					<clipPath id="clip0_1_80">
						<rect width={24} height={24} fill="white"></rect>
					</clipPath>
				</defs>
			</>
		</Icon>
	);
}

export default Telegram;
