import { cn } from "@/utils/component-utils";
import Link from "next/link";

const PORTFOLIO_LINK = "https://www.david-kimmich-portfolio.de";

function DevSign() {
	return (
		<Link
			target="_blank"
			href={PORTFOLIO_LINK}
			className={cn(
				`flex items-center rounded-full bg-[#111111]
                px-4 py-[6px] text-xs`
			)}
		>
			Developed by David Kimmich
		</Link>
	);
}

export default DevSign;
