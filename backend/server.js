import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL
}));
app.use(express.json());

// 1. Updated Transporter for Zoho India
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in", 
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS  
  },
  logger: true, // This will log everything to your host's dashboard
  debug: true   // This gives you the full SMTP details
});

// Verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error("Connection Error:", error);
  } else {
    console.log("Success! Your Zoho server is ready to send emails.");
  }
});

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // 2. Critical Fix: Send FROM your email, REPLY TO the customer
    await transporter.sendMail({
      from: process.env.EMAIL_USER, 
      to: process.env.EMAIL_USER, 
      replyTo: email, // This allows you to hit 'Reply' in your inbox to reach the customer
      subject: `New Contact Form: ${firstName} ${lastName}`,
      text: `
        New message from your website:
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});