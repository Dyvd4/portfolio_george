import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
	name: z.string().nonempty(),
	email: z.string().email(),
	message: z.string().nonempty(),
});
export type ContactSchema = z.infer<typeof contactSchema>;

export async function POST(req: NextRequest) {
	const reqData = await req.json();
	const { name, email, message } = reqData;
	try {
		contactSchema.parse({ name, email, message });
		return NextResponse.json("cool");
		// TODO: send mail
	} catch (e) {
		return NextResponse.json((e as z.ZodError).format(), { status: 400 });
	}
}
