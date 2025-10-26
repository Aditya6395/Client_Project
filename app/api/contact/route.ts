import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL || "admin@yourdomain.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    console.log("📩 Received contact form data:", body);
    console.log("🔑 Resend key present:", !!process.env.RESEND_API_KEY);
    console.log("📨 Admin email target:", adminEmail);

    // Store in Supabase
    const { error } = await supabase.from("contact_messages").insert([
      { name, email, phone, subject, message },
    ]);

    if (error) {
      console.error("❌ Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("✅ Saved in Supabase successfully!");

    // Send admin email via Resend
    try {
      const response = await resend.emails.send({
        from: "RV Global Immigration <onboarding@resend.dev>",
        to: adminEmail,
        subject: `New Contact Form Submission - ${subject}`,
        html: `
          <h2>New Contact Message</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || "Not provided"}</p>
          <p><b>Subject:</b> ${subject}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      });

      console.log("📤 Resend email response:", response);
    } catch (emailError) {
      console.error("❌ Resend email send error:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("🔥 Unexpected server error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
