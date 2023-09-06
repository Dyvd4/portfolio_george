import { cn } from "@/utils/component-utils";
import Image, { ImageProps } from "next/image";
import { ComponentPropsWithRef } from "react";

type _CaseImageProps = {
	imageProps: ImageProps;
};

export type CaseImageProps = _CaseImageProps &
	Omit<ComponentPropsWithRef<"div">, keyof _CaseImageProps>;

function CaseImage({ className, imageProps, ...props }: CaseImageProps) {
	return (
		<div
			className={cn(
				`bg-tertiary flex items-center justify-center rounded-2xl p-16`,
				className
			)}
			{...props}
		>
			{/* eslint-disable-next-line jsx-a11y/alt-text */}
			<Image {...imageProps} />
		</div>
	);
}

export default CaseImage;