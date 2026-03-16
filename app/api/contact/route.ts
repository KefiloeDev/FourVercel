import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "SET" : "MISSING");


    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🔍 VERIFY SMTP CONNECTION
    await transporter.verify();
    console.log("SMTP ready");

    // ✉️ SEND EMAIL
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: "info@kefiloe.co.za",
      subject,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SMTP error:", error);
    return NextResponse.json(
      { error: "SMTP verification failed" },
      { status: 500 }
    );
  }
}
