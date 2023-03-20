import { signOut } from 'next-auth/react';

export interface HeaderExpandProps {
  user?: string;
}

export default function HeaderExpand({ user }: HeaderExpandProps) {
  return (
    <div className="z-2 absolute top-16 w-auto rounded-md bg-slate-100 px-5 py-2">
      <div className="whitespace-nowrap font-bold">{user}</div>
      <div
        onClick={() => signOut()}
        className="cursor-pointer whitespace-nowrap transition-all duration-300 hover:font-bold"
      >
        Sign Out
      </div>
    </div>
  );
}
