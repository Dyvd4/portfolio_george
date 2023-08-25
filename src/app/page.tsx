import AboutMeSection from "./sections/AboutMe";
import CasesSection from "./sections/CasesSection";
import FaqSection from "./sections/FaqSection";
import HeroSection from "./sections/HeroSection";
import MainCaseSection from "./sections/MainCaseSection";

export default function Home() {
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
