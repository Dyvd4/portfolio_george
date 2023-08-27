"use client";

import modalIsActiveAtom from "@/atoms/modalIsActiveAtom";
import FormControl from "@/components/FormControl";
import Input from "@/components/Input";
import ContactModal from "@/components/Modals/ContactModal";
import Textarea from "@/components/Textarea";
import Button from "@/components/buttons/Button";
import { cn } from "@/utils/component-utils";
import { useAtom } from "jotai";
import { toast } from "react-hot-toast";

function Page(props) {
	const [, setModalIsActive] = useAtom(modalIsActiveAtom);
	const triggerToast = () => {
		toast("test");
	};
	return (
		<div
			className={cn(
				`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform`
			)}
		>
			<div>
				<Button onClick={triggerToast}>trigger toast</Button>
				<Textarea />
				<Button onClick={() => setModalIsActive(true)}>Toggle modal</Button>
				<ContactModal />
				<FormControl errorMessage={"*error message"}>
					<Input hasError placeholder="name" />
				</FormControl>
			</div>
		</div>
	);
}

export default Page;
