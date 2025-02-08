import nodemailer from 'nodemailer';

// SMTP Transporter Setup
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,               // Use 587 for TLS
  secure: false,           // false for TLS, true for SSL (port 465)
  auth: {
    user: 'amanpathak8926@gmail.com',         // Your Gmail
    pass: process.env.EMAIL_PASSWORD ,         // App Password from Gmail
  },
});

// Interface for Email Content
interface EmailContent {
  name: string;
  email: string;
  message: string;
}

// Send Email Function
export async function sendContactNotification(content: EmailContent): Promise<boolean> {
  const htmlContent = `
    <h2>📬 New Contact Form Submission</h2>
    <p><strong>From:</strong> ${content.name} (${content.email})</p>
    <p><strong>Message:</strong></p>
    <p>${content.message}</p>
  `;

  try {
    await transporter.sendMail({
      from: '"Portfolio Contact Form" <amanpathak8926@gmail.com>', // Sender's Email
      to: '2023ume0243@iitjammu.ac.in',                            // Recipient Email
      subject: `New Message from ${content.name}`,                // Email Subject
      text: `Message from ${content.name} (${content.email}): ${content.message}`, // Plain Text
      html: htmlContent,                                          // HTML Content
    });
    console.log('✅ Email sent successfully!');
    return true;
  } catch (error: any) {
    console.error('❌ Failed to send email:', error.message);
    return false;
  }
}
