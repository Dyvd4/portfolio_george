import AboutMeSection from "./sections/AboutMe";
import ContactSection from "./sections/ContactSection";
import FaqSection from "./sections/FaqSection";
import HeroSection from "./sections/HeroSection";

export default function Home() {
	return (
		<>
			<HeroSection />
			<AboutMeSection />
			<ContactSection />
			<FaqSection />
		</>
	);
}
