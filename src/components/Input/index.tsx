export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  error,
  ...rest
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="z-0 h-10 w-full rounded-md border border-slate-200 bg-transparent px-3 text-slate-50 transition-all duration-300 focus:scale-[1.01] focus:border-slate-50 focus:outline-none lg:mb-0"
        placeholder={placeholder}
        {...rest}
      />

      {error && (
        <p
          className="w-full text-xs text-red-400
      "
        >
          {error}
        </p>
      )}
    </>
  );
};

export default Input;
