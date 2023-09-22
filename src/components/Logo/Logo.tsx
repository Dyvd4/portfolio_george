import menuIsActiveAtom from "@/atoms/menuIsActiveAtom";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "@/public/Logo.svg";

function Logo() {
	const [, setMenuIsActive] = useAtom(menuIsActiveAtom);
	return (
		<Link rel="noreferrer noopener" onClick={() => setMenuIsActive(false)} href={"/"}>
			<Image className="cursor-pointer" src={LogoImg} alt="Logo" priority />
		</Link>
	);
}

export default Logo;
