import { useState } from 'react';
import { LinkOptionButtonProps } from '../LinkOption';

interface CustomLinkProps {
  active?: LinkOptionButtonProps['active'];
  children?: React.ReactNode;
}

export default function CustomLink({ active }: CustomLinkProps) {
  const [slug, setSlug] = useState<string>('');

  const handleChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlug(e.target.value);
  };
  return (
    <CustomLink.Body>
      <CustomLink.InputBox
        active={active!}
        handleSlug={handleChnage}
        slug={slug}
      />
    </CustomLink.Body>
  );
}

CustomLink.Body = function CustomLinkBody({
  children,
  ...restProps
}: CustomLinkProps) {
  return <div className="w-full">{children}</div>;
};

export interface CustomLinkInputBoxProps {
  slug: string;
  handleSlug: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isUserName?: boolean;
  active: LinkOptionButtonProps['active'];
}

CustomLink.InputBox = function CustomLinkInputBox({
  slug,
  handleSlug,
  active,
}: CustomLinkInputBoxProps) {
  const base = `${process.env.NEXT_PUBLIC_CLIENT_URL}/${
    active === 'username' ? 'u/' : ''
  }`;
  return (
    <div className="mt-10 flex w-full items-center overflow-hidden rounded-lg bg-white">
      <h1 className="bg-inherit pl-4">{base}</h1>
      <input
        type="text"
        value={slug}
        onChange={handleSlug}
        className="z-0 h-14 w-full flex-grow select-none pr-5 focus:shadow focus:outline-none"
      />
      <CustomLink.Button />
    </div>
  );
};

CustomLink.Button = function CustomLinkButton() {
  return (
    <>
      <button>Hey</button>
    </>
  );
};
