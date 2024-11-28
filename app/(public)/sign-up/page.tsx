import Link from "next/link";
import { LoginForm } from "../login/form";
import { SignupForm } from "./form";

export default function Page() {
  return (
    <div className="flex flex-col  gap-1">
      <Link href={"/login"} className="block text-end">
        Login
      </Link>
      <SignupForm />
    </div>
  );
}
