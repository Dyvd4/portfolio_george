"use client";

import { ContactSchema } from "@/app/api/contact/route";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "@/components/Modal";
import request from "@/utils/request-utils";
import { AxiosError } from "axios";
import Link from "next/link";
import { ComponentPropsWithRef, PropsWithChildren, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FormControl from "../FormControl";
import Input from "../Input";
import Textarea from "../Textarea";
import ButtonSecondary from "../buttons/ButtonSecondary";

type _ContactModalProps = {};

export type ContactModalProps = _ContactModalProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"div">>, keyof _ContactModalProps>;

function ContactModal({ className, children, ...props }: ContactModalProps) {
	const { register, handleSubmit } = useForm<ContactSchema>();
	const [errorMap, setErrorMap] = useState<Zod.ZodFormattedError<ContactSchema> | null>(null);
	const submitButtonRef = useRef<HTMLButtonElement | null>(null);
	const makeContactRequest = async (data: ContactSchema, e) => {
		try {
			await request.post(`/api/contact`, data);
			setErrorMap(null);
			// TODO: display toast on success
		} catch (e) {
			setErrorMap((e as AxiosError).response?.data as Zod.ZodFormattedError<ContactSchema>);
		}
	};
	return (
		<Modal>
			<ModalHeader>Contact Form</ModalHeader>
			<ModalBody>
				<form className="flex flex-col gap-2" onSubmit={handleSubmit(makeContactRequest)}>
					<FormControl errorMessage={errorMap?.name?._errors}>
						<Input className="w-full" placeholder="Name" {...register("name")} />
					</FormControl>
					<FormControl errorMessage={errorMap?.email?._errors}>
						<Input
							className="w-full"
							placeholder="Email"
							type="email"
							{...register("email")}
						/>
					</FormControl>
					<FormControl errorMessage={errorMap?.message?._errors}>
						<Textarea
							className="w-full"
							placeholder="Type your message here..."
							rows={4}
							{...register("message")}
						/>
					</FormControl>
					<button ref={submitButtonRef} type="submit" className="hidden"></button>
				</form>
			</ModalBody>
			<ModalFooter className="flex flex-col gap-2">
				<ButtonSecondary onClick={() => submitButtonRef.current!.click()}>
					Send
				</ButtonSecondary>
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
