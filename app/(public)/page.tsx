import Link from "next/link";

export default function Page() {
  return (
    <div className=" w-full h-full rounded-lg  overflow-hidden flex flex-col items-center justify-center gap-3">
      <Link href={"/login"} className="hover:font-bold">
        Login
      </Link>
      <Link href={"/sign-up"} className="hover:font-bold">
        Sign up
      </Link>
    </div>
  );
}
