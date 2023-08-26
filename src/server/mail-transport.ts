import nodemailer from "nodemailer";
import config from "@/app/config";

const { GMAIL_SMPT_USERNAME, GMAIL_SMPT_PASSWORD } = config;

const transporter = nodemailer.createTransport({
	pool: true,
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: GMAIL_SMPT_USERNAME,
		pass: GMAIL_SMPT_PASSWORD,
	},
});

export default transporter;
