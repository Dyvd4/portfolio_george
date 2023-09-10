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
					imageProps={{
						className: "rounded-xl",
						src: "/project-ruble-brothers/case-images/landing-page.png",
						width: 1920,
						height: 1080,
						alt: "Landing page",
					}}
				/>
			</section>
			<section className="flex gap-12">
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-ruble-brothers/case-images/iphone-landing-page.png",
						width: 447,
						height: 906,
						alt: "Iphone landing page",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-ruble-brothers/case-images/iphone-landing-page-2.png",
						width: 447,
						height: 906,
						alt: "Iphone landing page part 2",
					}}
				/>
			</section>
			<section>
				<CaseImage
					imageProps={{
						className: "rounded-xl",
						src: "/project-ruble-brothers/case-images/description-page.png",
						alt: "Description page",
						width: 1025,
						height: 779,
					}}
				/>
			</section>
			<section className="flex gap-12">
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-ruble-brothers/case-images/bank.png",
						width: 447,
						height: 906,
						alt: "Bank",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-ruble-brothers/case-images/iphone-description-page.png",
						width: 447,
						height: 906,
						alt: "Iphone description page",
					}}
				/>
			</section>
			<section>
				<CaseImage
					imageProps={{
						className: "rounded-xl",
						src: "/project-ruble-brothers/case-images/benefits-page.png",
						alt: "Benefits",
						width: 1920,
						height: 1080,
					}}
				/>
			</section>
			<section className="flex gap-12">
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-ruble-brothers/case-images/iphone-benefits-page.png",
						width: 447,
						height: 906,
						alt: "Iphone benefits page",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-ruble-brothers/case-images/iphone-benefits-page-2.png",
						width: 447,
						height: 906,
						alt: "Iphone benefits page 2",
					}}
				/>
			</section>
		</div>
	);
}

export default CaseImages;
