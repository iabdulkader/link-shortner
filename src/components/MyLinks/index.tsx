import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import { api } from '../../utils/trpc';
import Link from './Link';

export default function MyLinks() {
  const { data } = useSession();
  const { links, addLinks } = useGlobalContext();

  const { mutate, isLoading } = api.user.allLinks.useMutation({
    onSuccess: (data) => {
      addLinks!(data);
    },
  });

  useEffect(() => {
    mutate({
      email: data?.user?.email ? data.user.email : '',
    });
  }, [data?.user?.email]);

  if (isLoading)
    return (
      <MyLinks.Body>
        <h1 className="mt-8 text-center text-xl font-bold text-slate-100">
          Loading...
        </h1>
      </MyLinks.Body>
    );

  return (
    <MyLinks.Body>
      <>
        {links.map((url: any) => (
          <Link key={url.id} url={url} />
        ))}
      </>
    </MyLinks.Body>
  );
}

MyLinks.Body = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="mb-8 w-full max-w-[400px] lg:mb-12 lg:max-w-[630px]">
      <h1 className="mt-5 text-center text-2xl font-bold">My Links</h1>
      {children}
    </div>
  );
};
