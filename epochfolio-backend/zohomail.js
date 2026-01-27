import nodemailer from "nodemailer";

export async function sendMail(data) {
  try {
    console.log("Preparing to send email...");
    console.log("Email:", process.env.ZOHO_FROM_EMAIL);
    console.log("Password exists:", !!process.env.ZOHO_PASSWORD);
    console.log("Attempting SMTP connection...");

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_FROM_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify connection
    await transporter.verify();
    console.log("SMTP connection verified successfully");
    
    const fullName = `${data.firstName || ""} ${data.lastName || ""}`.trim();
    
    const mailOptions = {
      from: process.env.ZOHO_FROM_EMAIL,
      to: process.env.ZOHO_FROM_EMAIL,
      replyTo: data.email,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${data.email || "N/A"}</p>
        <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${(data.message || "N/A").replace(/\n/g, "<br>")}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error.message);
    console.error("Error code:", error.code);
    if (error.response) {
      console.error("SMTP Response:", error.response);
    }
    throw error;
  }
}
