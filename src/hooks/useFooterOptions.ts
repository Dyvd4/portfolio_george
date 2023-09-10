import footerIsActiveAtom from "@/atoms/footerIsActiveAtom";
import { useAtom } from "jotai";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type FooterOptions = {
	disable?: boolean;
};
const useFooterOptions = (options: FooterOptions) => {
	const [, setFooterIsActive] = useAtom(footerIsActiveAtom);
	const handleRouteChange = () => {
		setFooterIsActive(!options.disable);
	};
	const pathname = usePathname();
	const searchParams = useSearchParams();
	useEffect(() => {
		handleRouteChange();
	}, [pathname, searchParams]);
};
export default useFooterOptions;
