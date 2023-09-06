"use client";

import useFooterOptions from "@/hooks/useFooterOptions";
import AboutMeSection from "./sections/AboutMe";
import CasesSection from "./sections/CasesSection";
import FaqSection from "./sections/FaqSection";
import HeroSection from "./sections/HeroSection";
import MainCaseSection from "./sections/MainCaseSection";

export default function Home() {
	useFooterOptions({ disable: false });
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
