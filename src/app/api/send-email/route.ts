import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { email, selectedPdf } = await req.json();

    if (!email || !selectedPdf) {
      return NextResponse.json(
        { error: 'Email and PDF selection are required' },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use 'smtp.gmail.com' for Gmail
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASSWORD, // App password or email password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: email, // User's email as sender
      to: 'thegrowthhunger@gmail.com', // Your email address
      subject: `PDF Request from ${email}`,
      text: `Requested PDF: ${selectedPdf}\nFrom: ${email}`,
    });

    return NextResponse.json(
      { message: 'Request sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
