import { ToastContainer, toast } from "react-toastify";
import { sendEmail } from "../../api/";
import React, { useState } from "react";
import { GiAchillesHeel } from "react-icons/gi";
import { MdOutlineSend } from "react-icons/md";
import "react-toastify/dist/ReactToastify.min.css";

type Props = {};

const Email = (props: Props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const submitForm = async (ev: React.FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    const isEmailSent = await sendEmail(email, name);
    if (isEmailSent.error) {
      toast.error(isEmailSent.error, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        icon: GiAchillesHeel,
      });
      return;
    }
    setName("");
    setEmail("");
    toast.success(isEmailSent.message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      icon: MdOutlineSend,
    });
  };

  return (
    <form className="mb-5 flex w-10/12 flex-col items-center pb-5 pt-5 text-yellow-500">
      <ToastContainer />
      <div className="m-2">
        To get an email with more info about where to reach me, fill out this
        form.
      </div>
      <label htmlFor="Email">Email</label>
      <input
        className="m-3 w-8/12 max-w-[34rem] rounded-md border-2 pl-2 text-black"
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(ev.target.value)
        }
        value={email}
        placeholder="Enter your email..."
        type="text"
      />
      <label htmlFor="Name">Name</label>
      <input
        className="m-3 w-8/12 max-w-[34rem] rounded-md border-2 pl-2 text-black"
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
          setName(ev.target.value)
        }
        value={name}
        placeholder="Enter your name..."
        type="text"
      />
      <button
        className=" rounded-md border-2 border-black bg-orange-500 p-2 text-black shadow-md shadow-black transition active:translate-y-1 active:shadow-none dark:border-white dark:bg-cyan-400 dark:shadow-slate-400"
        type="submit"
        onClick={(ev) => submitForm(ev)}
      >
        Send Email
      </button>
    </form>
  );
};

export default Email;
