import { BiCopy } from 'react-icons/bi';
import Button from '../Button';
import ShortUrlDisplay from '../Input/ShortUrlDisplay';

export default function HomeInput() {
  return (
    <div>
      <div className="px-10  text-center">
        <h1 className="text-3xl font-extrabold lg:text-8xl">
          {process.env.NEXT_PUBLIC_APP_NAME}
        </h1>
        <p className="text-xs lg:text-base">
          Shorten your links and share them with your friends
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-0 lg:flex-row lg:justify-center lg:gap-2">
        <input
          type="text"
          className="z-0 mb-5 h-14 w-full rounded-lg px-5 focus:shadow focus:outline-none lg:mb-0"
          placeholder="Paste any link"
        />
        <Button />
      </div>

      <ShortUrlDisplay />
    </div>
  );
}
