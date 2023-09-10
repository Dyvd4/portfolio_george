import CaseImage from "@/components/CaseImage";
import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef } from "react";

type _CaseImagesProps = {};

export type CaseImagesProps = _CaseImagesProps &
	Omit<ComponentPropsWithRef<"div">, keyof _CaseImagesProps>;

function CaseImages({ className, ...props }: CaseImagesProps) {
	return (
		<div className={cn(`flex flex-col gap-12 px-12`, className)} {...props}>
			<section>
				<CaseImage
					className="p-0"
					imageProps={{
						src: "/project-peek/case-images/case-video.svg",
						width: 1920,
						height: 1080,
						alt: "Case video",
					}}
				/>
			</section>
			<section>
				<CaseImage
					imageProps={{
						src: "/project-peek/case-images/pick-any-color.png",
						width: 1920,
						height: 1080,
						alt: "Pick any color with the app",
					}}
				/>
			</section>
			<section className="flex gap-12">
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-peek/case-images/iphone-be-prepared-for-the-future.png",
						width: 447,
						height: 906,
						alt: "Iphone be prepared for the future",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-peek/case-images/iphone-pick-any-color.png",
						width: 447,
						height: 906,
						alt: "Iphone pick any color",
					}}
				/>
			</section>
			<section>
				<CaseImage
					imageProps={{
						src: "/project-peek/case-images/choose-your-peek.png",
						alt: "Choose your peek",
						width: 1920,
						height: 1080,
					}}
				/>
			</section>
			<section className="flex gap-12">
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-peek/case-images/iphone-choose-your-peek.png",
						width: 447,
						height: 906,
						alt: "Iphone choose your peek",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-peek/case-images/iphone-choose-your-peek-2.png",
						width: 447,
						height: 906,
						alt: "Iphone choose your peek part 2",
					}}
				/>
			</section>
			<section>
				<CaseImage
					imageProps={{
						src: "/project-peek/case-images/peek-menu.png",
						alt: "Peek menu",
						width: 1920,
						height: 1080,
					}}
				/>
			</section>
			<section className="flex gap-12">
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-peek/case-images/speaker.png",
						width: 447,
						height: 906,
						alt: "Speaker",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-peek/case-images/iphone-menu.png",
						width: 447,
						height: 906,
						alt: "Iphone peek menu",
					}}
				/>
			</section>
			<section>
				<CaseImage
					imageProps={{
						src: "/project-peek/case-images/your-cart.png",
						alt: "Your cart",
						width: 1920,
						height: 1080,
					}}
				/>
			</section>
			<section className="flex gap-12">
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-peek/case-images/iphone-peek-speaker-and-information.png",
						width: 447,
						height: 906,
						alt: "Iphone peek speaker and information",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-peek/case-images/Pop-up.png",
						width: 447,
						height: 906,
						alt: "Pop up",
					}}
				/>
			</section>
		</div>
	);
}

export default CaseImages;
