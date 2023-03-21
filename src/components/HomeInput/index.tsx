import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import { checkIsValidUrl } from '../../utils/link';
import { api } from '../../utils/trpc';
import Button from '../Button';
import Input from '../Input';
import ShortUrlDisplay from '../Input/ShortUrlDisplay';
import SlugInput from '../Input/SlugInput';

export default function HomeInput() {
  const { data, status } = useSession();
  const { addLink } = useGlobalContext();

  const [url, setUrl] = useState<{ value: string; error: string }>({
    value: '',
    error: '',
  });
  const [shortUrl, setShortUrl] = useState<string>('');
  const [slug, setSlug] = useState<{ value: string; error: string }>({
    value: '',
    error: '',
  });
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const { mutate, isLoading } = api.create.createUnAuth.useMutation({
    onSuccess: (data) => {
      setShortUrl(data.shortLink);
      addLink!({
        url: data.url,
        slug: data.shortLink,
      });
      setUrl({ value: '', error: '' });
      setSlug({ value: '', error: '' });
    },
  });

  const { mutate: slugCheck, reset } = api.link.checkSlug.useMutation({
    onSuccess: (data) => {
      if (data === false) {
        setSlug({ ...slug, error: 'Slug is taken' });
      }
    },
  });

  const handle = () => {
    if (checkIsValidUrl(url.value) === false) {
      setUrl({ ...url, error: 'Invalid URL' });
      return;
    }

    if (
      slug.value.trim().length !== 0 &&
      (slug.value.trim().length < 3 ||
        /^[a-zA-Z0-9]+$/.test(slug.value) === false)
    ) {
      setSlug({ ...slug, error: 'Invalid Slug' });
      return;
    }
    if (!slug.error && !url.error) {
      mutate({
        url: url.value,
        slug: slug.value.trim(),
        email: data?.user?.email ? data.user.email : '',
      });
    }
  };

  const handleKeyPress = useCallback(
    (event: any) => {
      if (!isProcessing) {
        setIsProcessing(true);
        reset();

        if (slug.value.trim().length > 3) {
          slugCheck({
            slug: slug.value,
          });
        }

        setTimeout(() => {
          setIsProcessing(false);
        }, 500);
      }
    },
    [isProcessing]
  );

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

      {data?.user?.name ? (
        <div className="mt-10 flex w-full flex-col items-center gap-3 lg:gap-2">
          <Input
            type="url"
            value={url.value}
            onChange={(e) => setUrl({ value: e.target.value, error: '' })}
            placeholder="Paste any link"
            error={url.error ? true : false}
            errorText={url.error}
          />
          <p className="inset-0 w-full text-left">
            Custom Slug
            <span className="ml-2 text-xs text-slate-100">
              (empty means randomly generated slug)
            </span>
          </p>

          <div className="flex h-full w-full flex-col lg:flex-row lg:gap-2">
            <div className="flex h-full w-full items-start">
              <div className="flex h-[2.75rem] items-center whitespace-nowrap">
                <p className="mr-2 text-slate-50">
                  {`${process.env.NEXT_PUBLIC_CLIENT_URL}/`}
                </p>
              </div>
              <SlugInput
                type="text"
                value={slug.value}
                onChange={(e) => setSlug({ value: e.target.value, error: '' })}
                placeholder="Custom Slug"
                error={slug.error ? true : false}
                errorText={slug.error}
                onKeyUp={handleKeyPress}
                processing={isProcessing}
              />
            </div>
            <div className="mb-5"></div>
            <div>
              <Button
                fallback="Shorting"
                loading={isLoading}
                onClick={handle}
              />
            </div>
            <div className="mt-5 lg:mt-0 lg:w-min"></div>
          </div>
        </div>
      ) : (
        <div className="mt-10 flex w-full flex-col gap-0 lg:flex-row lg:justify-center lg:gap-2">
          <Input
            type="text"
            value={url.value}
            onChange={(e) => setUrl({ value: e.target.value, error: '' })}
            error={url.error ? true : false}
            errorText={url.error}
            placeholder="Paste any link"
          />

          <div className="mb-5"></div>
          <div className="w-full lg:w-auto">
            <Button fallback="Shorting" loading={isLoading} onClick={handle} />
          </div>
        </div>
      )}

      {shortUrl && <ShortUrlDisplay shortUrl={shortUrl} />}
    </div>
  );
}
