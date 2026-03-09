import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Guest type matching your data structure
interface Guest {
  id: number;
  name: string;
  attending: "yes" | "no" | null;
  phone: string;
  dietary: string;
  isChild: boolean;
  isYoungChild: boolean;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // required for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // useful if using a self-signed cert on your mail server
  },
});

function buildGuestRow(guest: Guest): string {
  const type = guest.isYoungChild
    ? "👶 Young Child"
    : guest.isChild
    ? "🧒 Child"
    : "🧑 Adult";

  const attending =
    guest.attending === "yes"
      ? "✅ Yes"
      : guest.attending === "no"
      ? "❌ No"
      : "⏳ Pending";

  return `
    <tr>
      <td style="padding:8px;border:1px solid #ddd;">${guest.name || "—"}</td>
      <td style="padding:8px;border:1px solid #ddd;">${type}</td>
      <td style="padding:8px;border:1px solid #ddd;">${attending}</td>
      <td style="padding:8px;border:1px solid #ddd;">${guest.phone || "—"}</td>
      <td style="padding:8px;border:1px solid #ddd;">${guest.dietary || "—"}</td>
    </tr>
  `;
}

function buildEmailHtml(guests: Guest[]): string {
  const rows = guests.map(buildGuestRow).join("");

  return `
    <div style="font-family:sans-serif;max-width:700px;margin:auto;">
      <h2 style="color:#333;">🎉 RSVP Submissions</h2>
      <p>You have received <strong>${guests.length}</strong> guest RSVP(s).</p>
      <table style="width:100%;border-collapse:collapse;margin-top:16px;">
        <thead>
          <tr style="background:#f4f4f4;">
            <th style="padding:8px;border:1px solid #ddd;text-align:left;">Name</th>
            <th style="padding:8px;border:1px solid #ddd;text-align:left;">Type</th>
            <th style="padding:8px;border:1px solid #ddd;text-align:left;">Attending</th>
            <th style="padding:8px;border:1px solid #ddd;text-align:left;">Phone</th>
            <th style="padding:8px;border:1px solid #ddd;text-align:left;">Dietary</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
      <p style="margin-top:24px;color:#888;font-size:12px;">
        Sent automatically from your celebrations platform.
      </p>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Accept either a single guest object or an array
    const guests: Guest[] = Array.isArray(body) ? body : [body];

    if (!guests.length) {
      return NextResponse.json({ error: "No guest data provided." }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Celebrations RSVP" <${process.env.SMTP_FROM}>`,
      to: "arvnick1@gmail.com", // sends to yourself; change as needed
      subject: `🎉 New RSVP Submission – ${guests.length} Guest(s)`,
      html: buildEmailHtml(guests),
    });

    return NextResponse.json({ success: true, message: "Email sent successfully." });
  } catch (error: unknown) {
    console.error("Mail error:", error);
    return NextResponse.json(
      { error: "Failed to send email.", details: String(error) },
      { status: 500 }
    );
  }
}
