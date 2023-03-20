export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorText?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  error = false,
  errorText,
  ...rest
}) => {
  return (
    <div className="flex h-full w-full flex-col">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`z-0 h-10 w-full rounded-md border ${
          error ? 'border-red-500' : 'border-slate-200'
        } bg-transparent px-3 text-slate-50 transition-all duration-300 focus:scale-[1.01] focus:border-slate-50 focus:outline-none lg:mb-0`}
        placeholder={placeholder}
        {...rest}
      />

      {errorText && (
        <p
          className="mt-1 w-full text-xs text-red-400
      "
        >
          {errorText}
        </p>
      )}
    </div>
  );
};

export default Input;
