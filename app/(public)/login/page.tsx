import Link from "next/link";
import { LoginForm } from "./form";

export default function Page() {
  return (
    <div className="flex flex-col  gap-1">
      <Link href={"/sign-up"} className="block text-end">
        Sign up
      </Link>
      <LoginForm />
    </div>
  );
}
