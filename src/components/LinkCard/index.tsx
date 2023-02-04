import { MdOutlineDeleteOutline } from 'react-icons/md';

export default function LinkCard() {
  return (
    <div className="mt-5 flex">
      <div className="flex-grow">
        <input
          type="text"
          className="z-0 h-14 w-full rounded-l-lg
                  px-5 outline-none focus:shadow focus:outline-none"
        />
      </div>
      <div className="">
        <button className="h-14 rounded-r-lg bg-white px-3 text-2xl">
          <MdOutlineDeleteOutline />
        </button>
      </div>
    </div>
  );
}
