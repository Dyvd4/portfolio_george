import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import JotaiProvider from "@/components/Provider/Provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Menu from "./menu";
import ModalPortal from "./modal-portal";
import { Toaster } from "react-hot-toast";
import ButtonCursor from "@/components/buttons/ButtonCursor";

const matterFont = localFont({
	src: [
		{
			path: "../../public/fonts/matter-font/Matter-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/matter-font/Matter-Light.otf",
			weight: "300",
			style: "normal",
		},
	],
});

export const metadata: Metadata = {
	title: "itsgeorge",
	description: "Portfolio from itsgeorge",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<title>Portfolio</title>
				<link rel="icon" href="/Favicon.svg" type="image/x-icon" />
			</head>
			<JotaiProvider>
				<body className={matterFont.className}>
					<ButtonCursor />
					<div className="min-h-screen">
						<Navbar />
						<main>{children}</main>
					</div>
					<Footer />
					<Menu />
					<ModalPortal />
					<Toaster
						position="bottom-center"
						toastOptions={{
							style: {
								borderRadius: "10px",
								background: "hsla(0, 0%, 7%, 1)",
								color: "hsla(0, 0%, 50%, 1)",
							},
						}}
					/>
				</body>
			</JotaiProvider>
		</html>
	);
}
