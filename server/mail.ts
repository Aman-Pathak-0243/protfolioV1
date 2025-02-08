import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'test9mt@gmail.com',
    pass: 'test11++'
  }
});

interface EmailContent {
  name: string;
  email: string;
  message: string;
}

export async function sendContactNotification(content: EmailContent): Promise<boolean> {
  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> ${content.name} (${content.email})</p>
    <p><strong>Message:</strong></p>
    <p>${content.message}</p>
  `;

  try {
    await transporter.sendMail({
      from: '"Portfolio Contact Form" <test9mt@gmail.com>',
      to: 'test9mt@gmail.com',
      subject: `New Contact Form Message from ${content.name}`,
      text: `New message from ${content.name} (${content.email}): ${content.message}`,
      html: htmlContent,
    });
    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}