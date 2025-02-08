import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

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
    await mailService.send({
      to: "amanpathakiitj@gmail.com", // Your email address
      from: "amanpathakiitj@gmail.com", // Must be verified in SendGrid
      subject: `New Contact Form Message from ${content.name}`,
      text: `New message from ${content.name} (${content.email}): ${content.message}`,
      html: htmlContent,
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}
