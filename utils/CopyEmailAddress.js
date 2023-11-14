"use client";

import copyToClipboard from "copy-to-clipboard";
import { BsCopy } from "react-icons/bs";

export default function CopyEmailAddress() {
  const copyEmailToClipboard = () => {
    const success = copyToClipboard("olliescarth686@gmail.com");
    if (success) {
      alert("copied!");
    } else {
      console.error("Failed to copy");
    }
  };
  return (
    <div className="text-bone">
      <div className="flex gap-2 text-xl">
        <h2 className="font-fungis">olliescarth686@gmail</h2>
        <div
          className="text-xl text-bone hover:cursor-pointer"
          onClick={copyEmailToClipboard}
        >
          <BsCopy />
        </div>
      </div>
    </div>
  );
}
