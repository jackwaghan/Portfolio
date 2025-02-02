import { NextRequest, NextResponse } from "next/server";
import { LRUCache } from "lru-cache"; // Use named import

export const runtime = "edge";

const rateLimit = new LRUCache<string, number>({
  max: 100, // Store up to 100 IPs
  ttl: 60 * 1000, // 1-minute expiration
});

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown-ip"; // Get client IP
  const requestCount = (rateLimit.get(ip) || 0) + 1;

  if (requestCount > 1) {
    return NextResponse.json({ message: "Too many requests" }, { status: 429 });
  }

  rateLimit.set(ip, requestCount);
  const response = await req.json();
  const data = await response;

  return NextResponse.json({ message: "Success", form: data }, { status: 200 });
}
