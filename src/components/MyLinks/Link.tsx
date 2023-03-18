import { AiOutlineDelete } from 'react-icons/ai';

export default function Link() {
  return (
    <div className="mt-3 flex w-full flex-col items-center gap-3 lg:gap-2">
      <div className="flex w-full items-center rounded-md border border-slate-50 px-4 py-2">
        <div>
          <input
            type="url"
            className="w-full bg-transparent focus:outline-none"
            value={`${process.env.NEXT_PUBLIC_CLIENT_URL}/usdgfui`}
            readOnly
          />
          <input
            type="url"
            className="w-full bg-transparent text-xs text-slate-300 focus:outline-none"
            value={`${process.env.NEXT_PUBLIC_CLIENT_URL}/usdgfuijdusfgusidjgfdsgfsdgfsdghfudshgfusdfugdsufgsdfgdsgf`}
            readOnly
          />
        </div>
        <div className="ml-2">
          <AiOutlineDelete />
        </div>
      </div>
    </div>
  );
}
