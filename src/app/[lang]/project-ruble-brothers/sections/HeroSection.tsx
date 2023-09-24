import ProjectHeroSection from "@/components/Project/ProjectHeroSection";
import LogotypeImg from "@/public/project-ruble-brothers/Logotype.svg";
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
					Presenting a money exchange landing page design that is intuitive,
					<br />
					user-friendly, and modern. Our design will make it easy for customers <br />
					to quickly and securely exchange money.
				</>
			}
		/>
	);
}

export default HeroSection;
