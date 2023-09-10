"use client";

import useFooter from "@/hooks/useFooter";
import AboutMeSection from "./sections/AboutMe";
import CasesSection from "./sections/CasesSection";
import FaqSection from "./sections/FaqSection";
import HeroSection from "./sections/HeroSection";
import MainCaseSection from "./sections/MainCaseSection";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
	const [footerIsActive] = useFooter({ disable: false });
	const router = useRouter();

	useEffect(() => {
		if (footerIsActive) router.push(window.location.hash);
	}, [footerIsActive]);

	return (
		<>
			<HeroSection />
			<MainCaseSection />
			<AboutMeSection />
			<CasesSection />
			<FaqSection />
		</>
	);
}
