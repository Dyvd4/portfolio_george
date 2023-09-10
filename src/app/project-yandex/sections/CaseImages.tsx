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
						src: "/project-yandex/case-images/landing-page.png",
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
						src: "/project-yandex/case-images/iphone-landing-page.png",
						width: 447,
						height: 906,
						alt: "Iphone landing page",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-yandex/case-images/iphone-landing-page-2.png",
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
						src: "/project-yandex/case-images/description-page.png",
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
						src: "/project-yandex/case-images/iphone-description-page.png",
						width: 447,
						height: 906,
						alt: "Iphone description page",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-yandex/case-images/iphone-description-page-2.png",
						width: 447,
						height: 906,
						alt: "Iphone description page 2",
					}}
				/>
			</section>
			<section>
				<CaseImage
					imageProps={{
						className: "rounded-xl",
						src: "/project-yandex/case-images/description-2-page.png",
						alt: "Description page 2",
						width: 1920,
						height: 1080,
					}}
				/>
			</section>
			<section className="flex gap-12">
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-yandex/case-images/iphone-description-2-page.png",
						width: 447,
						height: 906,
						alt: "Iphone description 2 page",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-yandex/case-images/iphone-description-2-page-2.png",
						width: 447,
						height: 906,
						alt: "Iphone description 2 page 2",
					}}
				/>
			</section>
			<section>
				<CaseImage
					imageProps={{
						className: "rounded-xl",
						src: "/project-yandex/case-images/download-page.png",
						alt: "Download page",
						width: 1920,
						height: 1080,
					}}
				/>
			</section>
			<section className="flex gap-12">
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-yandex/case-images/iphone-download-page.png",
						width: 447,
						height: 906,
						alt: "Iphone download page",
					}}
				/>
				<CaseImage
					className="flex-1 px-60 py-40"
					imageProps={{
						src: "/project-yandex/case-images/iphone-download-page-2.png",
						width: 447,
						height: 906,
						alt: "Iphone download page 2",
					}}
				/>
			</section>
		</div>
	);
}

export default CaseImages;
