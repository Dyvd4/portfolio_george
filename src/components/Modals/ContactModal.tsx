import Modal, { ModalBody, ModalFooter, ModalHeader } from "@/components/Modal";
import Link from "next/link";
import { ComponentPropsWithRef, PropsWithChildren } from "react";
import Input from "../Input";
import Textarea from "../Textarea";
import ButtonSecondary from "../buttons/ButtonSecondary";

type _ContactModalProps = {};

export type ContactModalProps = _ContactModalProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"div">>, keyof _ContactModalProps>;

function ContactModal({ className, children, ...props }: ContactModalProps) {
	return (
		<Modal>
			<ModalHeader>Contact Form</ModalHeader>
			<ModalBody className="flex flex-col gap-2">
				<Input placeholder="Name" />
				<Input placeholder="Email" type="email" />
				<Textarea placeholder="Type your message here..." rows={4} />
			</ModalBody>
			<ModalFooter className="flex flex-col gap-2">
				<ButtonSecondary>Send</ButtonSecondary>
				<div>
					By clicking “Send”, you accept our{" "}
					<Link className="underline" href={"/privacy-policy"}>
						privacy policy
					</Link>
				</div>
			</ModalFooter>
		</Modal>
	);
}

export default ContactModal;
