import axios, { AxiosHeaders } from "axios";


export async function emailFetch(email: string, name: string) {
  const emailSent: AxiosHeaders = await axios.post(
    "/api/mail/",
    JSON.stringify({
      email,
      name,
      htmlStr: `
        <h2>I hope your day is going well!</h2>
        <p>
          I am a charasmatic and enthusiastic Software Engineer who is ready to show you what I can do for you! I work hard everyday to keep learning new skills and reaching my full potential. for any buisness inquries please reach out to me via email. 
        </p>
        <img src="https://media.tenor.com/pUJHssYR_JsAAAAC/welcome.gif" alt="Pikachu waving">
        <h3>Thank you for taking the time to look at my portfoli!</h3>
        <div class="links">
          <a href="mailto:actninswitch@gmail.com">actninswitch@gmail.com</a>
          &nbsp;||&nbsp;
          <a href="https://www.linkedin.com/in/anthony-thibodeaux">Linkden profile</a>
          &nbsp;||&nbsp;
          <a href="https://github.com/Tildozer">github account</a>
        </div>`,
    })
  );
}
