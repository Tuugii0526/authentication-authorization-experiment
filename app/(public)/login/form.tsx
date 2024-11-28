"use client";

import { login } from "@/app/auth/01-auth";
import { useActionState } from "react";

export function LoginForm() {
  const [state, formAction] = useActionState(login, undefined);
  return (
    <form action={formAction} className="">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="rounded-lg bg-[#E8F0FE]-300 p-2 border focus-visible:ouline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          />
          {state?.errors?.email && (
            <p className="text-red-600">{state.errors.email}</p>
          )}
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="rounded-lg bg-[#E8F0FE]-300 p-2 border focus-visible:ouline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          />
          {state?.errors?.password && (
            <p className="text-red-600">{state.errors.password}</p>
          )}
        </label>
        {state?.message && <p>{state.message}</p>}
        <button className="h-fit w-fit px-3 py-1 rounded-md ring-1 bg-white">
          Login
        </button>
      </div>
    </form>
  );
}
