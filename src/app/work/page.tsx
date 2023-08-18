import { cn } from "@/utils/component-utils";

async function Page(props) {
	await new Promise((res, rej) => {
		setTimeout(() => {
			res("");
		}, 2000);
	});
	return (
		<div
			className={cn(
				`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform`
			)}
			{...props}
		>
			work
		</div>
	);
}

export default Page;
