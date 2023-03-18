export default function Body({ children }: { children: JSX.Element }) {
  return (
    <div
      style={{
        backgroundImage: 'url(/endless-clouds.svg)',
        backgroundRepeat: 'repeat',
      }}
      className="w-full max-w-[500px] rounded-md bg-[#1a1b4b] "
    >
      {children}
    </div>
  );
}
