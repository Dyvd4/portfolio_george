import Image from "next/image";
import Link from "next/link";

function Logo() {
	return (
		<Link href={"/"}>
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
