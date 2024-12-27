"use client";

import { useState } from "react";

function Form() {
  const [addEmail, setAddEmail] = useState("");
  const [addPassword, setAddPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submittinghandle = () => {
    setSubmitting(true);
  };
  const submithandle = (e) => {
    e.preventDefault();
    if (!addEmail || addPassword !== confirmPassword) return;
    const newUser = {
      addEmail,
      addPassword,
    };
    console.log(newUser);
    setAddEmail("");
    setAddPassword("");
    setConfirmPassword("");
  };

  return (
    <form
      className="bg-black py-8 px-12 grid grid-flow-row gap-6 w-full h-full rounded-r-lg border"
      onClick={submittinghandle}
      onSubmit={submithandle}
    >
      <h2 className="font-bold text-2xl text-center ">Register</h2>

      <div>
        <label className="block text-sm">Email:</label>
        <input
          value={addEmail}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setAddEmail(e.target.value)}
          className="bg-transparent border-b-2 border-[#343a40] px-1 py-5 w-full outline-none hover:border-white active:border-white transition-all"
        />
        {!addEmail && (
          <p className="text-red-800 text-sm">Enter your email adress</p>
        )}
      </div>
      <div>
        <label className="block"></label>
        <input
          value={addPassword}
          type="password"
          placeholder="Password"
          onChange={(e) => setAddPassword(e.target.value)}
          className="bg-transparent border-b-2 border-[#343a40] px-1 py-5 w-full outline-none hover:border-white active:border-white transition-all"
        ></input>
        {!addPassword && (
          <p className="text-red-800 text-sm">Enter your password</p>
        )}
      </div>
      <div>
        <label className="block"></label>
        <input
          value={confirmPassword}
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="bg-transparent border-b-2 border-[#343a40] px-1 py-5 w-full outline-none hover:border-white active:border-white transition-all"
        ></input>
        {addPassword !== confirmPassword && (
          <p className="text-red-800 text-sm">Password is not match</p>
        )}
      </div>
      <button className="bg-[#480CA8] py-2 rounded hover:bg-[#7448ac] transition-all">
        Creat account
      </button>
    </form>
  );
}

export default Form;
