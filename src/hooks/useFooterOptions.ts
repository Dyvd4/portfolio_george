import footerIsActiveAtom from "@/atoms/footerIsActiveAtom";
import { useAtom } from "jotai";
import { useEffect } from "react";

type FooterOptions = {
	disable?: boolean;
};
const useFooterOptions = (options: FooterOptions) => {
	const [, setFooterIsActive] = useAtom(footerIsActiveAtom);
	useEffect(() => {
		if (options.disable) {
			setFooterIsActive(false);
		}
	}, []);
};
export default useFooterOptions;
