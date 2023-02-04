import { BiCopy } from 'react-icons/bi';

export default function HomeInput() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-extrabold lg:text-8xl">
          {process.env.NEXT_PUBLIC_APP_NAME}
        </h1>
        <p className="text-xs lg:text-base">
          Shorten your links and share them with your friends
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 px-10 lg:flex-row lg:justify-center lg:gap-2">
        <input
          type="text"
          className="z-0 h-14 w-full rounded-lg px-5 focus:shadow focus:outline-none"
          placeholder="Paste any link"
        />
        <div className="">
          <button className="h-14 w-full rounded-lg bg-accent px-6 text-white hover:bg-green-600">
            Shorten
          </button>
        </div>
      </div>

      <div className="mt-5 flex px-10">
        <div className="flex-grow">
          <input
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
    </div>
  );
}
