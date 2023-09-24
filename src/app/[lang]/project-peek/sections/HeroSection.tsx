import ProjectHeroSection from "@/components/Project/ProjectHeroSection";
import LogotypeImg from "@/public/project-peek/Logotype.svg";
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
					Revolutionizing design and function, the project showcases a cutting <br />
					-edge smart speaker concept. During this project I designed <br /> an adaptive
					website, 3D models and animations that transport users <br />
					into an immersive visual realm.
				</>
			}
		/>
	);
}

export default HeroSection;
