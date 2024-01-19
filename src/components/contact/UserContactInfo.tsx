import React from "react";

type Props = {
  contactInfo: string;
  setContactInfo: React.Dispatch<React.SetStateAction<string>>;
};

const UserContactInfo = ({ contactInfo, setContactInfo }: Props) => {
  return (
    <>
      <label htmlFor="Email">Contact info</label>
      <input
        className="m-3 w-8/12 max-w-[34rem] rounded-md border-2 pl-2 text-black"
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
          setContactInfo(ev.target.value)
        }
        value={contactInfo}
        placeholder="Enter your email or phone number..."
        type="text"
      />
    </>
  );
};

export default UserContactInfo;
