import React from "react";

type Props = {
  contactInfo: string;
  setContactInfo: React.Dispatch<React.SetStateAction<string>>;
};

const UserContactInfo = ({ contactInfo, setContactInfo }: Props) => {
  return (
    <>
      <label htmlFor="email">Contact info</label>
      <input
        id="email"
        autoComplete="email"
        className="m-3 w-8/12 max-w-[34rem] rounded-md border-2 pl-2 text-black"
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
          setContactInfo(ev.target.value)
        }
        value={contactInfo}
        placeholder="Enter a way to contact you..."
        type="text"
      />
    </>
  );
};

export default UserContactInfo;
