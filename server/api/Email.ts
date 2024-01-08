import nodemailer from "nodemailer";

interface MailObj {
  email: string;
  name: string;
  htmlStr: string;
}
interface EmailResponse {
  response: string;
}

const sendMail = async (client: string, content: MailObj | null) => {
  if (content !== null) {
    const mailSentResponse = await sendMailHandler(client, content);
    console.log("email sent, emailResponse: ", mailSentResponse);
  } else {
    throw new Error("Please fill out the information");
  }
};

const sendMailHandler = async (client: string, content: MailObj) => {
  return new Promise((resolve, reject) => {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const emailInfo = {
      from: process.env.EMAIL,
      to: `${content.email}`,
      subject: "Anthony's Info",
      html: getHTMLMessage(client, content),
    };

    const emailResponse = transport.sendMail(
      emailInfo,
      (err: Error, result: EmailResponse) => {
        if (err) {
          console.error("error sending mail");
          reject(err);
        } else {
          transport.close();
          resolve(result.response);
        }
      },
    );
  });
};

const getHTMLMessage = (client: string, content: MailObj) => {
  return `
      <h1>Hi, ${content.name}!</h1>
    <div>${content.htmlStr}</div>
    `;
};

export default sendMail;
