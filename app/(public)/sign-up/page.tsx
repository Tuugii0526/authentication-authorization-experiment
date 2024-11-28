import Link from "next/link";
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
