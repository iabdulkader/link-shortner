import modal from 'modal-rt';
import { useState } from 'react';
import { BiCopy } from 'react-icons/bi';
import { api } from '../../utils/trpc';
import Button from '../Button';
import Input from '../Input';
import ShortUrlDisplay from '../Input/ShortUrlDisplay';

export default function HomeInput() {
  const [url, setUrl] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>('');
  const [slug, setSlug] = useState<string>('');

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
    <div className="px-4">
      <div className="text-center">
        <h1 className="font-['Poppins'] text-3xl font-extrabold lg:text-8xl">
          {process.env.NEXT_PUBLIC_APP_NAME}
        </h1>
        <p className="text-xs lg:text-base">
          Shorten your links and share them with your friends
        </p>
      </div>

      {/* <div className="mt-10 flex w-full flex-col items-center gap-0 lg:flex-row lg:justify-center lg:gap-2">
        <Input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste any link"
          />
        <Button loading={isLoading} onClick={handle} />
      </div> */}

      {true && (
        <div className="mt-10 flex w-full flex-col items-center gap-3 lg:gap-2">
          <Input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste any link"
          />
          <p className="inset-0 w-full text-left">Custom Slug</p>

          <div className="flex h-full w-full flex-col lg:flex-row lg:gap-2">
            <div className="flex h-full w-full items-center">
              <div className="whitespace-nowrap">
                <p className="mr-2 text-slate-50">
                  {`${process.env.NEXT_PUBLIC_CLIENT_URL}/`}
                </p>
              </div>
              <Input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="Custom Slug"
              />
            </div>

            <div className="mt-5 lg:mt-0 lg:w-min">
              <Button loading={isLoading} onClick={handle} />
            </div>
          </div>
        </div>
      )}
      {shortUrl && <ShortUrlDisplay shortUrl={shortUrl} />}
    </div>
  );
}
