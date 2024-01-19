import React from "react";

type Props = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

const Message = ({ message, setMessage }: Props) => {
  return (
    <>
      <label htmlFor="Message">Message me for inquiries</label>
      <textarea
        className="m-3 min-h-[10rem] w-8/12 max-w-[34rem] rounded-md border-2 pl-2 text-black"
        onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) =>
          setMessage(ev.target.value)
        }
        value={message}
        placeholder="Enter your message..."
      />
    </>
  );
};

export default Message;
