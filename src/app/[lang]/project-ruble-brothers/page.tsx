"use client";

import ProjectFooter from "@/components/Project/ProjectFooter";
import { cn } from "@/utils/component-utils";
import CaseImages from "./sections/CaseImages";
import HeroSection from "./sections/HeroSection";
import useFooter from "@/hooks/useFooter";
import FooterImg from "@/public/project-ruble-brothers/footer-image.png";

function Page(props) {
	useFooter({ disable: true });
	return (
		<div className={cn(``)}>
			<HeroSection />
			<CaseImages />
			<ProjectFooter imageSrc={FooterImg} nextProjectHref="/project-peek" />
		</div>
	);
}

export default Page;
