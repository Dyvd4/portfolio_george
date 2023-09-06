import { cn } from "@/utils/component-utils";
import HeroSection from "./sections/HeroSection";

function Page(props) {
	return (
		<div className={cn(`flex-1`)}>
			<HeroSection />
		</div>
	);
}

export default Page;
