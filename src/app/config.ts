import { z } from "zod";

const envVariables = z.object({
	BASE_URL: z.string(),
	NEXT_PUBLIC_DEV_SIGN_URL: z.string(),
	SMTP_HOST: z.string(),
	SMPT_USERNAME: z.string(),
	SMPT_PASSWORD: z.string(),
	CONTACT_RECIPIENT: z.string(),
});

export default envVariables.parse({
	BASE_URL: process.env.BASE_URL!,
	NEXT_PUBLIC_DEV_SIGN_URL: process.env.NEXT_PUBLIC_DEV_SIGN_URL!,
	SMTP_HOST: process.env.SMTP_HOST!,
	SMPT_USERNAME: process.env.SMPT_USERNAME!,
	SMPT_PASSWORD: process.env.SMPT_PASSWORD!,
	CONTACT_RECIPIENT: process.env.CONTACT_RECIPIENT!,
});
