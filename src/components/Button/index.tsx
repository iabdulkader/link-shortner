export interface ButtonProps {
  text?: string;
  height?: number;
  onClick?: () => void;
}

export default function Button({ text, height, ...rest }: ButtonProps) {
  return (
    <div className="">
      <button
        {...rest}
        style={{ height: `${height! / 4}rem` }}
        className="h-14 rounded-lg bg-accent px-6 text-center text-white hover:bg-green-600"
      >
        {text ? text : 'Shorten'}
      </button>
    </div>
  );
}
