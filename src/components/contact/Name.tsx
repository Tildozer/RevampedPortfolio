import React from "react";

type Props = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

const Name = ({ name, setName }: Props) => {
  return (
    <>
      <label htmlFor="Name">Name</label>
      <input
        id="Name"
        autoComplete="name"
        className="m-3 w-8/12 max-w-[34rem] rounded-md border-2 pl-2 text-black"
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
          setName(ev.target.value)
        }
        value={name}
        placeholder="Enter your name..."
        type="text"
      />
    </>
  );
};

export default Name;
