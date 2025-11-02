require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Środki ostrożności
app.use(express.json({ limit: "10kb" }));
app.use(rateLimit({ windowMs: 60 * 1000, max: 20 }));
// Jeśli front działa pod innym originem niż proxy Vite, odkomentuj:
// app.use(cors({ origin: "http://localhost:5173" }));
app.use(
  cors({
    origin: ["http://localhost:3000", "http://192.168.1.9:3000"],
    // origin: "*",
    methods: ["POST"],
    // credentials: true,
  })
);

// Prosta funkcja do „ucieczki” HTML
function escapeHtml(s = "") {
  return s.replace(
    /[&<>"']/g,
    (m) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      }[m])
  );
}

// Jeden transporter na całe życie procesu (szybciej)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: String(process.env.SMTP_SECURE).toLowerCase() === "true", // 465 -> true
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};

  // Walidacja minimalna
  if (!email || !message) {
    return res
      .status(400)
      .json({ ok: false, error: "Podaj email i treść wiadomości." });
  }
  if (String(message).length > 2000) {
    return res
      .status(400)
      .json({ ok: false, error: "Wiadomość jest za długa (max 2000 znaków)." });
  }

  try {
    const info = await transporter.sendMail({
      from: `"${name || "Formularz kontaktowy"}" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `Nowa wiadomość z formularza${name ? ` od ${name}` : ""}`,
      text: `Nadawca: ${name || "(brak)"}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Imię:</strong> ${escapeHtml(name || "(brak)")}</p>
        <p><strong>Email nadawcy:</strong> ${escapeHtml(email)}</p>
        <p><strong>Wiadomość:</strong></p>
        <div>${escapeHtml(message).replace(/\n/g, "<br>")}</div>
      `,
    });

    return res.json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ ok: false, error: "Nie udało się wysłać wiadomości." });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend słucha na http://localhost:${PORT}`);
});
