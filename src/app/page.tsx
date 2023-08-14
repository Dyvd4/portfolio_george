import Button from "@/components/buttons/Button";

export default function Home() {
	return (
		<main className="relative min-h-screen">
			<div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-8">
				<h1 className="text-primary text-8xl">hello@itsgeorge.com</h1>
				<Button>Contact form</Button>
			</div>
		</main>
	);
}
