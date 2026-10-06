import {
	SECRET_EMAIL_HOST,
	SECRET_EMAIL_PASS,
	SECRET_EMAIL_PORT,
	SECRET_EMAIL_SECURE,
	SECRET_EMAIL_USER
} from '$env/static/private';
import { PUBLIC_EMAIL_FROM_DISPLAY_NAME } from '$env/static/public';
import type { Actions } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

export const actions: Actions = {
	contact: async (event) => {
		const form_data = await event.request.formData();
		const name = (form_data.get('name') as string).trim();
		const email = (form_data.get('email') as string).trim();
		const company = (form_data.get('company') as string).trim();
		const message = (form_data.get('message') as string).trim();

		console.log({ name, email, company, message });

		const transporter = nodemailer.createTransport({
			host: SECRET_EMAIL_HOST,
			port: Number(SECRET_EMAIL_PORT) || 587,
			secure: SECRET_EMAIL_SECURE === 'true',
			auth: {
				user: SECRET_EMAIL_USER,
				pass: SECRET_EMAIL_PASS
			}
		});

		try {
			await transporter.verify();
			console.log('Email transporter verified successfully.');
		} catch (error) {
			console.error('Error verifying email transporter:', error);
		}

		try {
			await transporter.sendMail({
				from: PUBLIC_EMAIL_FROM_DISPLAY_NAME,
				to: email,
				subject: 'Muss sich noch wer ausdenken', // TODO: Replace with actual subject line
				text: `Thank you for contacting us, ${name}. We have received your message and will get back to you shortly.`, // TODO: Muss sich auch noch wer ausdenken
				html: `<p>Thank you for contacting us, ${name}.</p><p>We have received your message and will get back to you shortly.</p>` // TODO: Muss sich auch auch noch wer ausdenken
			});
		} catch (error) {
			console.error('Error sending contact form confirmation email:', error);
		}

		try {
			await transporter.sendMail({
				from: PUBLIC_EMAIL_FROM_DISPLAY_NAME,
				to: PUBLIC_EMAIL_FROM_DISPLAY_NAME,
				subject: 'New contact form submission', // TODO: Replace with actual subject line
				text: `You have received a new message from ${name} (${email}, ${company}):\n\n${message}`, // TODO: Muss sich auch noch wer ausdenken
				html: `<p>You have received a new message from ${name} (${email}, ${company}):</p><p>${message}</p>` // TODO: Muss sich auch noch wer ausdenken
			});
		} catch (error) {
			console.error('Error sending contact form submission email:', error);
		}
	}
};
