import { LOCALES } from "@/middleware";

export const getLocaleHref = (href: `/${string}`) => {
	const currentLocale = LOCALES.find(
		(locale) =>
			window.location.pathname.startsWith(`/${locale}/`) ||
			window.location.pathname.startsWith(`/${locale}`)
	);
	return `/${currentLocale}${href}`;
};
