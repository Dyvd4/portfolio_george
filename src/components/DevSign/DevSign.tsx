import Button from "@/components/buttons/Button";
import Link from "next/link";

const PORTFOLIO_LINK = "https://www.portfolio.ticketify.dev/about-me";

function DevSign() {
	return (
		<Link target="_blank" href={PORTFOLIO_LINK}>
			<Button className="px-4 py-[6px] text-xs">Developed by David Kimmich</Button>
		</Link>
	);
}

export default DevSign;
