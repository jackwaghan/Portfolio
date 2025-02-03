import { NextRequest, NextResponse } from "next/server";
import { LRUCache } from "lru-cache"; // Use named import
import { Resend } from "resend";
import EmailTemplate from "@/app/Components/email-template";

// export const runtime = "edge";

const resend = new Resend("re_G3YR7fYF_Hi1o6QCjYX5JUcTYULL3DTRH");
const rateLimit = new LRUCache<string, number>({
  max: 100, // Store up to 100 IPs
  ttl: 60 * 1000, // 1-minute expiration
});

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown-ip"; // Get client IP
  const requestCount = (rateLimit.get(ip) || 0) + 1;

  if (requestCount > 1) {
    return NextResponse.json({ message: "Wait 1 minute" }, { status: 429 });
  }

  rateLimit.set(ip, requestCount);
  const { name, email } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Jack Waghan <form@updates.jackwaghan.com>",
      to: [email],
      subject: "Contact Form Submission",
      react: await EmailTemplate({ name }),
    });
    if (error) {
      console.log(error);

      return Response.json(
        { message: "Failed to send email", error },
        { status: 500 },
      );
    }
    return NextResponse.json(
      { message: "Success", form: data },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 },
    );
  }
}
