import { z } from "zod";

const envVariables = z.object({
	BASE_URL: z.string(),
	GMAIL_SMPT_USERNAME: z.string(),
	GMAIL_SMPT_PASSWORD: z.string(),
	NEXT_PUBLIC_DEV_SIGN_URL: z.string(),
});

export default envVariables.parse(process.env);
