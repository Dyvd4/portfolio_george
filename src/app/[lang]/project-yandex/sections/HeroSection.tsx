import ProjectHeroSection from "@/components/Project/ProjectHeroSection";
import LogotypeImg from "@/public/project-yandex/Logotype.svg";
import Image from "next/image";

function HeroSection() {
	return (
		<ProjectHeroSection
			image={
				<Image
					priority
					alt="Logotype"
					src={LogotypeImg}
					style={{
						width: "100%",
					}}
				/>
			}
			description={
				<>
					Yandex Match is a new dating service that can help you find a person with
					similar hobbies thanks to the new feature — «Maximum Match»!
				</>
			}
		/>
	);
}

export default HeroSection;
