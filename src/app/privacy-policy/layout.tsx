import { Metadata } from "next/types";

export const metadata: Metadata = {
	title: "Privacy policy",
	description: "Every website needs to have a privacy policy. Or do they have to?",
	keywords: ["unnecessary", "sometimes existing"],
};

function Layout({ children }: { children: React.ReactNode }) {
	return children;
}

export default Layout;
