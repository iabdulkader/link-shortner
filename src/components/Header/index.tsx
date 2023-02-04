import Link from 'next/link';

export default function Header({ user }: { user: string }) {
  return (
    <div className="flex h-16 items-center justify-between bg-accent px-3 text-slate-50 lg:px-6">
      <div className="">
        <Link href="/" className="text-2xl font-bold">
          {process.env.NEXT_PUBLIC_APP_NAME}
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-0 text-2xl font-extrabold text-accent">
            <h1>{user[0]!.toUpperCase()}</h1>
          </div>

          <div className="hidden text-lg font-bold lg:block">{user}</div>
        </div>

        <div className="hidden lg:block">
          <h2>Signout</h2>
        </div>
      </div>
    </div>
  );
}

Header.Home = function HomeHeader() {
  return (
    <div className="absolute top-5 right-8 flex gap-5">
      <div>
        <Link href="/register">Sign Up</Link>
      </div>

      <div>
        <Link href="/login">Sign In</Link>
      </div>
    </div>
  );
};
