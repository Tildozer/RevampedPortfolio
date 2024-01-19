import React from "react";

type Props = {
  subject: string;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
};

const Subject = ({ subject, setSubject }: Props) => {
  return (
    <>
      <label htmlFor="subject">Subject</label>
      <input
        id="subject"
        className="m-3 w-8/12 max-w-[34rem] rounded-md border-2 pl-2 text-black"
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
          setSubject(ev.target.value)
        }
        value={subject}
        placeholder="Enter your subject..."
      />
    </>
  );
};

export default Subject;
