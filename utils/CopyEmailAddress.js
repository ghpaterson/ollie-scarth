"use client";

import copyToClipboard from "copy-to-clipboard";
import { BsCopy } from "react-icons/bs";

export default function CopyEmailAddress() {
  const copyEmailToClipboard = () => {
    const success = copyToClipboard("olliescarth686@gmail.com");
    if (success) {
      alert("Wow! You got my email");
    } else {
      console.error("Failed to copy");
    }
  };
  return (
    <div className="text-bone">
      <div className="flex gap-2">
        <h2 className="font-fungis text-xl">olliescarth686@gmail</h2>
        <div
          className="text-lg text-bone hover:cursor-pointer"
          onClick={copyEmailToClipboard}
        >
          <BsCopy />
        </div>
      </div>
    </div>
  );
}
