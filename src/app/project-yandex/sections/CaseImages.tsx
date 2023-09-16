import CaseImage from "@/components/CaseImage";
import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef } from "react";
import LandingPageImg from "@/public/project-yandex/case-images/landing-page.png";
import IphoneLandingPageImg from "@/public/project-yandex/case-images/iphone-landing-page.png";
import IphoneLandingPage2Img from "@/public/project-yandex/case-images/iphone-landing-page-2.png";
import DescriptionPageImg from "@/public/project-yandex/case-images/description-page.png";
import IphoneDescriptionPageImg from "@/public/project-yandex/case-images/iphone-description-page.png";
import IphoneDescriptionPage2Img from "@/public/project-yandex/case-images/iphone-description-page-2.png";
import DownloadPageImg from "@/public/project-yandex/case-images/download-page.png";
import IphoneDownloadPageImg from "@/public/project-yandex/case-images/iphone-download-page.png";
import IphoneDownloadPage2Img from "@/public/project-yandex/case-images/iphone-download-page-2.png";

type _CaseImagesProps = {};

export type CaseImagesProps = _CaseImagesProps &
	Omit<ComponentPropsWithRef<"div">, keyof _CaseImagesProps>;

function CaseImages({ className, ...props }: CaseImagesProps) {
	return (
		<div className={cn(`flex flex-col gap-12 px-12`, className)} {...props}>
			<section>
				<CaseImage
					imageProps={{
						className: "rounded-xl",
						src: LandingPageImg,
						alt: "Landing page",
					}}
				/>
			</section>
			<section className="flex gap-12">
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: IphoneLandingPageImg,
						alt: "Iphone landing page",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: IphoneLandingPage2Img,
						alt: "Iphone landing page part 2",
					}}
				/>
			</section>
			<section>
				<CaseImage
					imageProps={{
						className: "rounded-xl",
						src: DescriptionPageImg,
						alt: "Description page",
					}}
				/>
			</section>
			<section className="flex gap-12">
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: IphoneDescriptionPageImg,
						alt: "Iphone description page",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: IphoneDescriptionPage2Img,
						alt: "Iphone description page 2",
					}}
				/>
			</section>
			<section>
				<CaseImage
					imageProps={{
						className: "rounded-xl",
						src: DownloadPageImg,
						alt: "Download page",
					}}
				/>
			</section>
			<section className="flex gap-12">
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: IphoneDownloadPageImg,
						alt: "Iphone download page",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: IphoneDownloadPage2Img,
						alt: "Iphone download page 2",
					}}
				/>
			</section>
		</div>
	);
}

export default CaseImages;
