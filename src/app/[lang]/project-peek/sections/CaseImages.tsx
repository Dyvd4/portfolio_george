import CaseImage, { IphoneCaseImage } from "@/components/CaseImage";
import IphoneCaseSection from "@/components/sections/IphoneCaseSection";
import PopupImg from "@/public/project-peek/case-images/Pop-up.png";
import CaseVideoImg from "@/public/project-peek/case-images/case-video.svg";
import ChooseYourPeekImg from "@/public/project-peek/case-images/choose-your-peek.png";
import IphoneBePreparedForTheFutureImg from "@/public/project-peek/case-images/iphone-be-prepared-for-the-future.png";
import IphoneChooseYourPeek2Img from "@/public/project-peek/case-images/iphone-choose-your-peek-2.png";
import IphoneChooseYourPeekImg from "@/public/project-peek/case-images/iphone-choose-your-peek.png";
import IphoneMenuImg from "@/public/project-peek/case-images/iphone-menu.png";
import IphonePeekSpeakerAndInformationImg from "@/public/project-peek/case-images/iphone-peek-speaker-and-information.png";
import IphonePickAnyColorImg from "@/public/project-peek/case-images/iphone-pick-any-color.png";
import PeekMenuImg from "@/public/project-peek/case-images/peek-menu.png";
import PickAnyColorImg from "@/public/project-peek/case-images/pick-any-color.png";
import SpeakerImg from "@/public/project-peek/case-images/speaker.png";
import YourCartImg from "@/public/project-peek/case-images/your-cart.png";
import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef } from "react";

type _CaseImagesProps = {};

export type CaseImagesProps = _CaseImagesProps &
	Omit<ComponentPropsWithRef<"div">, keyof _CaseImagesProps>;

function CaseImages({ className, ...props }: CaseImagesProps) {
	return (
		<div className={cn(`flex flex-col gap-2 lg:gap-12 lg:px-12`, className)} {...props}>
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
			<IphoneCaseSection>
				<IphoneCaseImage
					imageProps={{
						src: IphoneBePreparedForTheFutureImg,
						alt: "Iphone be prepared for the future",
					}}
				/>
				<IphoneCaseImage
					imageProps={{
						src: IphonePickAnyColorImg,
						alt: "Iphone pick any color",
					}}
				/>
			</IphoneCaseSection>
			<section>
				<CaseImage
					imageProps={{
						src: ChooseYourPeekImg,
						alt: "Choose your peek",
					}}
				/>
			</section>
			<IphoneCaseSection>
				<IphoneCaseImage
					imageProps={{
						src: IphoneChooseYourPeekImg,
						alt: "Iphone choose your peek",
					}}
				/>
				<IphoneCaseImage
					imageProps={{
						src: IphoneChooseYourPeek2Img,
						alt: "Iphone choose your peek part 2",
					}}
				/>
			</IphoneCaseSection>
			<section>
				<CaseImage
					imageProps={{
						src: PeekMenuImg,
						alt: "Peek menu",
					}}
				/>
			</section>
			<IphoneCaseSection>
				<IphoneCaseImage
					imageProps={{
						src: SpeakerImg,
						alt: "Speaker",
					}}
				/>
				<IphoneCaseImage
					imageProps={{
						src: IphoneMenuImg,
						alt: "Iphone peek menu",
					}}
				/>
			</IphoneCaseSection>
			<section>
				<CaseImage
					imageProps={{
						src: YourCartImg,
						alt: "Your cart",
					}}
				/>
			</section>
			<IphoneCaseSection>
				<IphoneCaseImage
					imageProps={{
						src: IphonePeekSpeakerAndInformationImg,
						alt: "Iphone peek speaker and information",
					}}
				/>
				<IphoneCaseImage
					imageProps={{
						src: PopupImg,
						alt: "Pop up",
					}}
				/>
			</IphoneCaseSection>
		</div>
	);
}

export default CaseImages;
