import Button from "@/components/buttons/Button";
import Link from "next/link";

const PORTFOLIO_LINK = process.env.NEXT_PUBLIC_DEV_SIGN_URL!;

function DevSign() {
	return (
		<Link target="_blank" href={PORTFOLIO_LINK}>
			<Button className="px-4 py-[6px] text-xs md:py-[6px] md:text-xs">
				Developed by David Kimmich
			</Button>
		</Link>
	);
}

export default DevSign;
