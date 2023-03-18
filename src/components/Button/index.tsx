export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  height?: number;
  onClick?: () => void;
  loading?: boolean;
}

export default function Button({
  text,
  height,
  loading,
  ...rest
}: ButtonProps) {
  return (
    <div className="w-full">
      <button
        {...rest}
        style={{ height: `${height! / 4}rem` }}
        className="h-10 w-full rounded-md border border-accent px-6 text-center text-white transition-all duration-300 hover:bg-green-600"
      >
        {loading ? <p>Loading</p> : <>{text ? text : 'Shorten'}</>}
      </button>
    </div>
  );
}
