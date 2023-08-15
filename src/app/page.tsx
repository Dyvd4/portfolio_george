import Button from "@/components/buttons/Button";
import FaqSection from "./sections/FaqSection";

export default function Home() {
	return (
		<>
			{/* <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-8">
				<h1 className="text-primary text-8xl">hello@itsgeorge.com</h1>
				<Button>Contact form</Button>
			</div> */}
			<FaqSection />
		</>
	);
}
