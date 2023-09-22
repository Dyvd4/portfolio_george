import CaseImage from "@/components/CaseImage";
import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef } from "react";
import LandingPageImg from "@/public/project-ruble-brothers/case-images/landing-page.png";
import IphoneLandingPageImg from "@/public/project-ruble-brothers/case-images/iphone-landing-page.png";
import IphoneLandingPage2Img from "@/public/project-ruble-brothers/case-images/iphone-landing-page-2.png";
import DescriptionPageImg from "@/public/project-ruble-brothers/case-images/description-page.png";
import BankImg from "@/public/project-ruble-brothers/case-images/bank.png";
import IphoneDescriptionPageImg from "@/public/project-ruble-brothers/case-images/iphone-description-page.png";
import BenefitsPageImg from "@/public/project-ruble-brothers/case-images/benefits-page.png";
import IphoneBenefitsPageImg from "@/public/project-ruble-brothers/case-images/iphone-benefits-page.png";
import IphoneBenefitsPage2Img from "@/public/project-ruble-brothers/case-images/iphone-benefits-page-2.png";

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
						src: BankImg,
						alt: "Bank",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: IphoneDescriptionPageImg,
						alt: "Iphone description page",
					}}
				/>
			</section>
			<section>
				<CaseImage
					imageProps={{
						className: "rounded-xl",
						src: BenefitsPageImg,
						alt: "Benefits",
					}}
				/>
			</section>
			<section className="flex gap-12">
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: IphoneBenefitsPageImg,
						alt: "Iphone benefits page",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: IphoneBenefitsPage2Img,
						alt: "Iphone benefits page 2",
					}}
				/>
			</section>
		</div>
	);
}

export default CaseImages;
