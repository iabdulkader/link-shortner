import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { api } from '../../utils/trpc';
import Button from '../Button';
import Input from '../Input';
import Link from './Link';

export default function MyLinks() {
  const { data, status } = useSession();
  const [urls, setUrls] = useState<any>([]);

  const { mutate, isLoading } = api.user.allLinks.useMutation({
    onSuccess: (data) => {
      setUrls(data);
    },
  });

  useEffect(() => {
    mutate({
      email: data?.user?.email ? data.user.email : '',
    });
  }, [data?.user?.email]);

  return (
    <div className="mb-8 w-full max-w-[400px] lg:mb-12 lg:max-w-[630px]">
      <h1 className="mt-5 text-center text-2xl font-bold">My Links</h1>
      {urls.map((url: any) => (
        <Link key={url._id} url={url} />
      ))}
    </div>
  );
}
