"use client";
import { useFormStatus } from "react-dom";
import { logout } from "../auth/01-auth";

export function Logout() {
  const status = useFormStatus();
  return (
    <button
      className="py-1 px-2 rounded-md ring-1 text-gray-400 hover:text-black"
      onClick={async () => {
        await logout();
      }}
    >
      {status.pending ? "Loading" : "Logout"}
    </button>
  );
}
