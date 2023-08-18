import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { cn } from "@/utils/component-utils";
import Expandable from "@/components/Expandable/Expandable";

function Page(props) {
	return (
		<div
			className={cn(
				`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform`
			)}
		>
			<Expandable title="test" description="kdjsffjsdfjksklflks" />
		</div>
	);
}

export default Page;
