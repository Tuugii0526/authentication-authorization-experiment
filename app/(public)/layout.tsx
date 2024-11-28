import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full p-2 bg-yellow-100">
      <p className="text-center font-bold leading-6 text-xl">You are welcome</p>

      {children}
    </div>
  );
}
