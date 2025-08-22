const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Setup transporter once (reuse for both emails)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route: Contact Form
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill all required fields" });
  }

  try {
    // 1. Send email to YOU (the site owner)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: subject || "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Message: ${message}
      `,
    });

    // 2. Schedule auto-reply to customer after 20 seconds
    setTimeout(() => {
      transporter.sendMail({
        from: `"CodeAxis" <${process.env.EMAIL_USER}>`,
        to: email, // customer's email
        subject: "Thanks for contacting us!",
        text: `Hi ${name},\n\nThank you for reaching out! We received your message and will get back to you soon.\n\n- CodeAxis Team`,
      }).catch((err) => console.error("Error sending auto-reply:", err));
    }, 20000); // 20 seconds

    // Respond immediately to frontend
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
