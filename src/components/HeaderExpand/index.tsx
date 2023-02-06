export interface HeaderExpandProps {
  user?: string;
}

export default function HeaderExpand({ user }: HeaderExpandProps) {
  return (
    <div className="flex flex-col items-end border-t-[1px] border-gray-600 py-3">
      <div>{user}</div>
      <div>Sign Out</div>
    </div>
  );
}
