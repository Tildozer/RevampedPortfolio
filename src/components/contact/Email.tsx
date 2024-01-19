import { ToastContainer, toast } from "react-toastify";
import { sendEmail } from "../../api/";
import React, { useState } from "react";
import { GiAchillesHeel } from "react-icons/gi";
import { MdOutlineSend } from "react-icons/md";
import "react-toastify/dist/ReactToastify.min.css";
import Name from "./Name.jsx";
import UserContactInfo from "./UserContactInfo.jsx";
import Message from "./Message.jsx";
import Subject from "./Subject.jsx";

type Props = {};

const Email = (props: Props) => {
  const [contactInfo, setContactInfo] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const toatsSuccess = (message: string) => {
    toast.success(message, {
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

  const toastFailure = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      icon: GiAchillesHeel,
    });
  };

  const submitForm = async (ev: React.FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    if (name === "") return toastFailure("please enter name");
    if (message === "") return toastFailure("please enter message");
    if (subject === "") return toastFailure("please enter subject");
    if (contactInfo === "") return toastFailure("please enter contact info");

    const isEmailSent = await sendEmail(message, name, contactInfo, subject);
    setName("");
    setMessage("");
    setSubject("");
    setContactInfo("");
    toatsSuccess(isEmailSent.message);
  };

  return (
    <form className="mb-32 flex w-10/12 flex-col items-center rounded-lg border-2 border-slate-400 bg-black pb-5 pt-5 text-yellow-500 shadow-lg shadow-black transition duration-300 dark:bg-slate-500 dark:text-black dark:shadow-slate-500 sm:mb-10">
      <ToastContainer />
      <div className="p-6 text-orange-200 dark:text-yellow-500">
        To send an email to me with an inqury on work or help with a project
        please fill out this form.
      </div>
      <Name name={name} setName={setName} />
      <Subject subject={subject} setSubject={setSubject} />
      <UserContactInfo
        contactInfo={contactInfo}
        setContactInfo={setContactInfo}
      />
      <Message message={message} setMessage={setMessage} />
      <button
        className=" rounded-md border-2 border-white bg-orange-500 p-2 text-white shadow-md shadow-slate-400 transition duration-300 active:translate-y-1 active:shadow-none dark:bg-cyan-400 dark:text-black"
        type="submit"
        onClick={(ev) => submitForm(ev)}
      >
        Send Email
      </button>
    </form>
  );
};

export default Email;
