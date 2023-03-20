import { AiOutlineDelete } from 'react-icons/ai';

export default function Link({ url }: any) {
  return (
    <div className="mt-3 flex w-full flex-col items-center gap-3 px-3 lg:gap-2">
      <div className="flex w-full items-center justify-between rounded-md border border-slate-50 px-4 py-2">
        <div>
          <input
            type="url"
            className="w-full bg-transparent focus:outline-none"
            value={`${process.env.NEXT_PUBLIC_CLIENT_URL}/${url.slug}`}
            readOnly
          />
          <input
            type="url"
            className="w-full bg-transparent text-xs text-slate-300 focus:outline-none"
            value={url.url}
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
