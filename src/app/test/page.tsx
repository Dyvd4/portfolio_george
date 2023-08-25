import FormControl from "@/components/FormControl";
import Input from "@/components/Input";
import { cn } from "@/utils/component-utils";

function Page(props) {
	return (
		<div
			className={cn(
				`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform`
			)}
		>
			<FormControl hasError errorMessage={"*error message"}>
				<Input hasError placeholder="name" />
			</FormControl>
		</div>
	);
}

export default Page;
