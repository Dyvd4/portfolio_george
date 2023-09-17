import { Metadata } from "next/types";

export const metadata: Metadata = {
	title: "Ruble brothers",
	description:
		"Presenting a money exchange landing page design that is intuitive, user-friendly, and modern. Our design will make it easy for customers to quickly and securely exchange money.",
	keywords: [
		"design",
		"money exchange",
		"intuitive",
		"user-friendly",
		"modern",
		"ruble brothers",
	],
};

function Layout({ children }: { children: React.ReactNode }) {
	return children;
}

export default Layout;
