import { cn } from "@/utils/component-utils";

function Page(props) {
	return (
		<div
			className={cn(
				`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform`
			)}
			{...props}
		>
			faq
		</div>
	);
}

export default Page;
