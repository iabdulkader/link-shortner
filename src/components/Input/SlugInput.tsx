import Loader from '../Loader';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorText?: string;
  processing?: boolean;
}

export default function SlugInput({
  type,
  value,
  onChange,
  placeholder,
  error = false,
  errorText,
  processing = false,
  ...rest
}: InputProps) {
  return (
    <div className="flex h-full w-full flex-col">
      <div
        className={`flex items-center rounded-md border ${
          error ? 'border-red-500' : 'border-slate-200'
        }`}
      >
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={`slug z-0 h-10 w-full bg-transparent px-3 text-slate-50 outline-none transition-all duration-300 focus:scale-[1.01] focus:border-slate-50 focus:outline-none lg:mb-0`}
          placeholder={placeholder}
          {...rest}
        />
        <div className="mr-3 h-6 w-6">{processing && <Loader.small />}</div>
      </div>

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
}
