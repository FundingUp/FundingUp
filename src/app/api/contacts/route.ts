import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json()

        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',  // or your email service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,  // Your email where you want to receive messages
            subject: `Contact Form: ${subject}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        }

        // Send email
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        )

    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            { message: "Failed to send email" },
            { status: 500 }
        )
    }
}