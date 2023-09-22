"use client";

import ProjectFooter from "@/components/ProjectFooter";
import { cn } from "@/utils/component-utils";
import CaseImages from "./sections/CaseImages";
import HeroSection from "./sections/HeroSection";
import useFooter from "@/hooks/useFooter";
import FooterImg from "@/public/project-peek/footer-image.png";

function Page(props) {
	useFooter({ disable: true });
	return (
		<div className={cn(``)}>
			<HeroSection />
			<CaseImages />
			<ProjectFooter imageSrc={FooterImg} nextProjectHref="/project-yandex" />
		</div>
	);
}

export default Page;
