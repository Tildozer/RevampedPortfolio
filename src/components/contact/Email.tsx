// import { sendEmail } from "../../api/";
import React, { useState } from "react";

type Props = {};

const Email = (props: Props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

//   const submitForm = async (ev: React.FormEvent<HTMLButtonElement>) => {
//     ev.preventDefault();
//     sendEmail(email, name);
//   };

  return (
    <form className="flex flex-col items-center bg-coolGray pb-5 pt-5 mb-5 rounded-md border-2 shadow-lg shadow-onyx border-onyx w-10/12">
      <div className="m-2">
        To get an email with more info about where to reach me, fill out this
        form.
      </div>
      <label htmlFor="Email">Email</label>
      <input
        className="m-3 w-8/12 max-w-[34rem] pl-2 text-black rounded-md border-2 border-mountainBatten"
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(ev.target.value)
        }
        value={email}
        placeholder="Enter your email..."
        type="text"
      />
      <label htmlFor="Name">Name</label>
      <input
        className="m-3 w-8/12 max-w-[34rem] pl-2 text-black rounded-md border-2 border-mountainBatten"
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
          setName(ev.target.value)
        }
        value={name}
        placeholder="Enter your name..."
        type="text"
      />
      {/* <button type="submit" onClick={(ev) => submitForm(ev)}>
        Send Email
      </button> */}
    </form>
  );
};

export default Email;
