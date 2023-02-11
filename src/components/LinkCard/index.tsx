import { MdOutlineDeleteOutline } from 'react-icons/md';

export default function LinkCard() {
  return (
    <div className="mt-5 flex items-center overflow-hidden rounded-lg bg-white py-4">
      <div className="flex-grow">
        <input
          type="text"
          value="gdsahgd"
          className="z-0 h-6 w-full
                  px-5 text-xs outline-none focus:shadow focus:outline-none"
        />
        <input
          type="text"
          value="gdsahgd"
          className="z-0 h-8 w-full
                  px-5 outline-none focus:shadow focus:outline-none"
        />
      </div>
      <div className="">
        <button className="h-14 rounded-r-lg px-3 text-2xl">
          <MdOutlineDeleteOutline />
        </button>
      </div>
    </div>
  );
}
