import ProjectFooter from "@/components/ProjectFooter";
import { cn } from "@/utils/component-utils";
import CaseImages from "./sections/CaseImages";
import HeroSection from "./sections/HeroSection";

function Page(props) {
	return (
		<div className={cn(``)}>
			<HeroSection />
			<CaseImages />
			<ProjectFooter
				imageSrc={"/project-ruble-brothers/footer-image.png"}
				nextProjectHref="/project-peek"
			/>
		</div>
	);
}

export default Page;
