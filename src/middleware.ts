import { NextRequest } from "next/server";

const DEFAULT_LOCALE = "en";
const LOCALES = [DEFAULT_LOCALE, "ru"];

function getLocale(request: NextRequest) {
	return request.headers["Accept-Language"] || DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const pathnameHasLocale = LOCALES.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);

	if (pathnameHasLocale) return;

	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;
	return Response.redirect(request.nextUrl);
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		"/((?!_next).*)",
		// Optional: only run on root (/) URL
		// '/'
	],
};
