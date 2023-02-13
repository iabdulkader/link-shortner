import { BiCopy } from 'react-icons/bi';

export default function ShortUrlDisplay({ shortUrl }: { shortUrl?: string }) {
  return (
    <div className="mt-5 flex">
      <div className="flex-grow">
        <input
          value={`${process.env.NEXT_PUBLIC_CLIENT_URL}/${shortUrl}`}
          readOnly
          type="text"
          className="z-0 h-14 w-full rounded-l-lg
                    px-5 outline-none focus:shadow focus:outline-none"
        />
      </div>
      <div className="">
        <button className="h-14 rounded-r-lg bg-white px-3 text-2xl">
          <BiCopy />
        </button>
      </div>
    </div>
  );
}
