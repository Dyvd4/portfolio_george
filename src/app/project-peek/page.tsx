"use client";

import ProjectFooter from "@/components/ProjectFooter";
import { cn } from "@/utils/component-utils";
import CaseImages from "./sections/CaseImages";
import HeroSection from "./sections/HeroSection";
import useFooterOptions from "@/hooks/useFooterOptions";

function Page(props) {
	useFooterOptions({ disable: true });
	return (
		<div className={cn(``)}>
			<HeroSection />
			<CaseImages />
			<ProjectFooter
				imageSrc={"/project-peek/footer-image.png"}
				nextProjectHref="/project-yandex"
			/>
		</div>
	);
}

export default Page;
