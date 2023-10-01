import modalIsActiveAtom from "@/atoms/modalIsActiveAtom";
import CaseImage, { IphoneCaseImage } from "@/components/CaseImage";
import CaseImages from "@/components/sections/CaseImagesSection";
import IphoneCaseSection from "@/components/sections/IphoneCaseSection";
import useFollowingCursorButton from "@/hooks/useFollowingCursorButton";
import PopupImg from "@/public/project-peek/case-images/Pop-up.png";
import CaseVideoWithoutButtonImg from "@/public/project-peek/case-images/case-video-without-button.png";
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
import { useAtom } from "jotai";
import { useRef } from "react";
import CaseVideoPlayerModal from "../components/CaseVideoPlayerModal";

function PeekCaseImages() {
	const caseVideoImgRef = useRef<HTMLDivElement | null>(null);
	const [, setModalIsActive] = useAtom(modalIsActiveAtom);
	useFollowingCursorButton({
		parentRef: caseVideoImgRef,
		buttonProps: {
			title: "Play video",
			onClick: () => {
				setModalIsActive(true);
			},
		},
	});
	return (
		<>
			<CaseImages>
				<section>
					<CaseImage
						onClick={() => setModalIsActive(true)}
						className="p-0 sm:hidden"
						imageProps={{
							src: CaseVideoImg,
							alt: "Case video",
						}}
					/>
					<CaseImage
						ref={caseVideoImgRef}
						className="hidden p-0 sm:block"
						imageProps={{
							src: CaseVideoWithoutButtonImg,
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
			</CaseImages>
			<CaseVideoPlayerModal />
		</>
	);
}

export default PeekCaseImages;
