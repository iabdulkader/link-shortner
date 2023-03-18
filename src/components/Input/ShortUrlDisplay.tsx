import { toast } from 'react-hot-toast';
import { BiCopy } from 'react-icons/bi';

export default function ShortUrlDisplay({ shortUrl }: { shortUrl?: string }) {
  let url = `${process.env.NEXT_PUBLIC_CLIENT_URL}/${shortUrl}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast.success('Copied to clipboard');
  };

  return (
    <div className="mt-5 flex">
      <div className="flex-grow text-slate-50">
        <input
          value={url}
          readOnly
          type="text"
          className="z-0 h-10 w-full rounded-l-md
                    border-l border-t border-b border-slate-50 bg-transparent px-3 outline-none focus:shadow focus:outline-none"
        />
      </div>
      <div className="text-slate-50">
        <button className="h-10 rounded-r-md border-r border-t border-b border-slate-50 bg-white bg-transparent px-3 text-xl">
          <BiCopy onClick={copyToClipboard} />
        </button>
      </div>
    </div>
  );
}
