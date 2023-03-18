export interface HeaderExpandProps {
  user?: string;
}

export default function HeaderExpand({ user }: HeaderExpandProps) {
  return (
    <div className="absolute top-12 right-0 w-36 rounded-md bg-slate-100 px-5 py-2">
      <div className="whitespace-nowrap">{user}</div>
      <div className="whitespace-nowrap">Sign Out</div>
    </div>
  );
}
