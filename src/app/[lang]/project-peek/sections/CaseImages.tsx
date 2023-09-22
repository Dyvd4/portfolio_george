import CaseImage from "@/components/CaseImage";
import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef } from "react";
import CaseVideoImg from "@/public/project-peek/case-images/case-video.svg";
import PickAnyColorImg from "@/public/project-peek/case-images/pick-any-color.png";
import IphoneBePreparedForTheFutureImg from "@/public/project-peek/case-images/iphone-be-prepared-for-the-future.png";
import IphonePickAnyColorImg from "@/public/project-peek/case-images/iphone-pick-any-color.png";
import ChooseYourPeekImg from "@/public/project-peek/case-images/choose-your-peek.png";
import IphoneChooseYourPeekImg from "@/public/project-peek/case-images/iphone-choose-your-peek.png";
import IphoneChooseYourPeek2Img from "@/public/project-peek/case-images/iphone-choose-your-peek-2.png";
import PeekMenuImg from "@/public/project-peek/case-images/peek-menu.png";
import SpeakerImg from "@/public/project-peek/case-images/speaker.png";
import IphoneMenuImg from "@/public/project-peek/case-images/iphone-menu.png";
import YourCartImg from "@/public/project-peek/case-images/your-cart.png";
import IphonePeekSpeakerAndInformationImg from "@/public/project-peek/case-images/iphone-peek-speaker-and-information.png";
import PopupImg from "@/public/project-peek/case-images/Pop-up.png";

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
						src: CaseVideoImg,
						alt: "Case video",
					}}
				/>
			</section>
			<section>
				<CaseImage
					imageProps={{
						src: PickAnyColorImg,
						alt: "Pick any color with the app",
					}}
				/>
			</section>
			<section className="flex gap-12">
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: IphoneBePreparedForTheFutureImg,
						alt: "Iphone be prepared for the future",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: IphonePickAnyColorImg,
						alt: "Iphone pick any color",
					}}
				/>
			</section>
			<section>
				<CaseImage
					imageProps={{
						src: ChooseYourPeekImg,
						alt: "Choose your peek",
					}}
				/>
			</section>
			<section className="flex gap-12">
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: IphoneChooseYourPeekImg,
						alt: "Iphone choose your peek",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: IphoneChooseYourPeek2Img,
						alt: "Iphone choose your peek part 2",
					}}
				/>
			</section>
			<section>
				<CaseImage
					imageProps={{
						src: PeekMenuImg,
						alt: "Peek menu",
					}}
				/>
			</section>
			<section className="flex gap-12">
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: SpeakerImg,
						alt: "Speaker",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: IphoneMenuImg,
						alt: "Iphone peek menu",
					}}
				/>
			</section>
			<section>
				<CaseImage
					imageProps={{
						src: YourCartImg,
						alt: "Your cart",
					}}
				/>
			</section>
			<section className="flex gap-12">
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: IphonePeekSpeakerAndInformationImg,
						alt: "Iphone peek speaker and information",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: PopupImg,
						alt: "Pop up",
					}}
				/>
			</section>
		</div>
	);
}

export default CaseImages;
