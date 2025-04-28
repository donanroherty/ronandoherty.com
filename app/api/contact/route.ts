import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json(
        {
          error: 'MISSING_REQUIRED_DATA',
          message: 'Email address and message are required.',
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.fastmail.com',
      port: 465,
      secure: true,
      service: 'FastMail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${email}" <${process.env.MAIL_USER}>`,
      replyTo: email,
      to: 'info@ronandoherty.com',
      subject: `Blog Contact (${email})`,
      text: message,
      html: `<p>${message.replace(/\n/g, '<br>')}</p>`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
      return NextResponse.json(
        {
          message: 'SUCCESS',
          code: 200,
        },
        { status: 200 }
      );
    } catch (mailError) {
      console.error('Error sending email: ', mailError);
      const statusCode = (mailError as any)?.responseCode || 500;
      return NextResponse.json(
        {
          message: 'FAILURE',
          error: 'Failed to send email.',
          code: statusCode,
        },
        { status: statusCode }
      );
    }
  } catch (error) {
    console.error('Error processing request: ', error);
    return NextResponse.json(
      {
        message: 'ERROR',
        error: 'An unexpected error occurred.',
        code: 500,
      },
      { status: 500 }
    );
  }
}
