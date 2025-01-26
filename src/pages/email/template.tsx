import React from "react";

export default function Template({ name, inquiry }) {
  return (
    <div className="flex flex-col items-center justify-center my-36 space-y-10 p-10 rounded-2xl bg-[#ebecf0] w-fit mx-auto">
      <div>
        <img
          src="/logo-512.png"
          alt="Logo"
          width={30}
          height={30}
          className="mx-auto"
        />
      </div>
      <div className="w-full max-w-lg mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Hi, {name}!</h1>
        <p className="text-lg">Thank you for reaching out to me!</p>
        <p className="text-lg">
          This is to confirm that I have received your inquiry regarding{" "}
          <span className="font-semibold">{inquiry}</span>.
        </p>
        <p className="text-base">
          I will get back to you within 1-2 business days.
        </p>
        <p className="text-base font-medium">Best regards,</p>
        <p>John</p>
      </div>
    </div>
  );
}
