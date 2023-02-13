import modal from 'modal-rt';
import { useState } from 'react';
import { BiCopy } from 'react-icons/bi';
import { api } from '../../utils/trpc';
import Button from '../Button';
import ShortUrlDisplay from '../Input/ShortUrlDisplay';

export default function HomeInput() {
  const [url, setUrl] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>('');

  const { mutate, isLoading } = api.create.createUnAuth.useMutation({
    onSuccess: (data) => {
      setShortUrl(data.shortLink);
    },
  });
  const handle = () => {
    mutate({
      url,
    });
  };

  return (
    <div>
      <div className="px-10  text-center">
        <h1 className="font-['Poppins'] text-3xl font-extrabold lg:text-8xl">
          {process.env.NEXT_PUBLIC_APP_NAME}
        </h1>
        <p className="text-xs lg:text-base">
          Shorten your links and share them with your friends
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-0 lg:flex-row lg:justify-center lg:gap-2">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="z-0 mb-5 h-14 w-full rounded-lg px-5 focus:shadow focus:outline-none lg:mb-0"
          placeholder="Paste any link"
        />
        <Button loading={isLoading} onClick={handle} />
      </div>

      <ShortUrlDisplay shortUrl={shortUrl} />
    </div>
  );
}
