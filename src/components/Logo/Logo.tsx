import menuIsActiveAtom from "@/atoms/menuIsActiveAtom";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";

function Logo() {
	const [, setMenuIsActive] = useAtom(menuIsActiveAtom);
	return (
		<Link rel="noreferrer noopener" onClick={() => setMenuIsActive(false)} href={"/"}>
			<Image
				className="cursor-pointer"
				src="/Logo.svg"
				alt="Logo"
				width={32}
				height={32}
				priority
			/>
		</Link>
	);
}

export default Logo;
