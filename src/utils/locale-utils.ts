import { LOCALES } from "@/middleware";

export const getCurrentLocale = () => {
	return LOCALES.find(
		(locale) =>
			window.location.pathname.startsWith(`/${locale}/`) ||
			window.location.pathname.startsWith(`/${locale}`)
	)!;
};

export const getLocaleHref = (href: `/${string}`): string => {
	if (typeof window === "undefined") return "";
	return `/${getCurrentLocale()}${href}`;
};
