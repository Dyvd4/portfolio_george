"use client";

import { ContactSchema, contactSchema } from "@/app/api/contact/route";
import modalIsActiveAtom from "@/atoms/modalIsActiveAtom";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "@/components/Modal";
import request from "@/utils/request-utils";
import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ComponentPropsWithRef, PropsWithChildren, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import FormControl from "../FormControl";
import Input from "../Input";
import Textarea from "../Textarea";
import ButtonSecondary from "../buttons/ButtonSecondary";

type _ContactModalProps = {};

export type ContactModalProps = _ContactModalProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"div">>, keyof _ContactModalProps>;

function ContactModal({ className, children, ...props }: ContactModalProps) {
	const [, setModalIsActive] = useAtom(modalIsActiveAtom);
	const { register, handleSubmit } = useForm<ContactSchema>();
	const [errorMap, setErrorMap] = useState<Zod.ZodFormattedError<ContactSchema> | null>(null);
	const submitButtonRef = useRef<HTMLButtonElement | null>(null);
	const router = useRouter();

	const handleLinkClick = (e, href: string) => {
		e.preventDefault();
		setModalIsActive(false);
		router.push(href);
	};

	const makeContactRequest = async (data: ContactSchema, e) => {
		try {
			const { name, email, message } = data;
			contactSchema.parse({ name, email, message });
			setModalIsActive(false);
			toast.promise(
				request.post(`/api/contact`, data),
				{
					loading: "Sending mail...",
					success: () => {
						setErrorMap(null);
						return "Successfully sent mail";
					},
					error: "An unknown error occurred",
				},
				{
					style: {
						borderRadius: "10px",
						background: "#333",
						color: "#fff",
					},
				}
			);
		} catch (e) {
			setErrorMap((e as z.ZodError).format());
			return;
		}
	};

	return (
		<Modal>
			<ModalHeader onClose={() => setErrorMap(null)}>Contact Form</ModalHeader>
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
							className="w-full resize-none"
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
					<Link
						className="underline"
						href={"/privacy-policy"}
						onClick={(e) => handleLinkClick(e, "/privacy-policy")}
					>
						privacy policy
					</Link>
				</div>
			</ModalFooter>
		</Modal>
	);
}

export default ContactModal;
