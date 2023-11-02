import { type NextRequest } from "next/server";
import sendMail from "../db/mail";

interface MailObj {
  email: string;
  name: string;
  htmlStr: string;
}

export async function POST(request: NextRequest) {
  try {
    const content: MailObj = await request.json();
    const regex: RegExp = new RegExp(
      "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
    );
    // This is used to make sure the username is an email
    if (!regex.test(content.email)) {
      return new Response("Plese enter a valid email", {
        status: 400,
      });
    }
    await sendMail("Anthony's resume", content);

    return new Response(JSON.stringify({ message: "Email sent" }));
  } catch (error: any) {
    return new Response(error, {
      status: 500,
    });
  }
}
