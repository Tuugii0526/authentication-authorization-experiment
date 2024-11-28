export function LoginForm() {
  return (
    <form action="" className="">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="rounded-lg bg-[#E8F0FE]-300 p-2 border focus-visible:ouline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="rounded-lg bg-[#E8F0FE]-300 p-2 border focus-visible:ouline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          />
        </label>
        <button className="h-fit w-fit px-3 py-1 rounded-md ring-1 bg-white">
          Login
        </button>
      </div>
    </form>
  );
}
