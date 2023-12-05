import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { email: "example@example.com", password: "password123" },
    { status: 201 }
  );
}
