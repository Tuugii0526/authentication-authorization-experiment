"use client";

import { signup } from "@/app/auth/01-auth";
import { useActionState } from "react";
import { useFormState } from "react-dom";
export function SignupForm() {
  const [state, formAction] = useActionState(signup, undefined);
  return (
    <form action={formAction} className="">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="rounded-lg bg-[#E8F0FE]-300 p-2 border focus-visible:ouline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          />
          {state?.errors?.name &&
            state.errors.name.map((e, i) => (
              <p key={i} className="text-red-600">
                {e}
              </p>
            ))}
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="rounded-lg bg-[#E8F0FE]-300 p-2 border focus-visible:ouline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          />
          {state?.errors?.email &&
            state.errors.email.map((e, i) => (
              <p key={i} className="text-red-600">
                {e}
              </p>
            ))}
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="rounded-lg bg-[#E8F0FE]-300 p-2 border focus-visible:ouline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          />
          {state?.errors?.password &&
            state.errors.password.map((e, i) => (
              <p key={i} className="text-red-600">
                {e}
              </p>
            ))}
        </label>
        {state?.message && <p>{state.message}</p>}
        <button className="h-fit w-fit px-3 py-1 rounded-md ring-1 bg-white">
          Sign up
        </button>
      </div>
    </form>
  );
}
