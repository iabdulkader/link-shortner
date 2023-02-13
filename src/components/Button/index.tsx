export interface ButtonProps {
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
    <div className="">
      <button
        {...rest}
        style={{ height: `${height! / 4}rem` }}
        className="h-14 rounded-lg bg-accent px-6 text-center text-white hover:bg-green-600"
      >
        {loading ? <p>Loading</p> : <>{text ? text : 'Shorten'}</>}
      </button>
    </div>
  );
}
