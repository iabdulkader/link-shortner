import { useState } from 'react';
import CustomLink from '../CustomLink';

export interface LinkOptionButtonProps {
  active: 'username' | 'random';
  handleActive: (active: LinkOptionButtonProps['active']) => void;
}
export default function LinkOption() {
  const [active, setActive] =
    useState<LinkOptionButtonProps['active']>('username');

  const handleActive = (active: LinkOptionButtonProps['active']) => {
    setActive(active);
  };

  return (
    <div>
      <LinkOption.Button handleActive={handleActive} active={active} />
    </div>
  );
}

LinkOption.Button = function LinkOptionButton({
  active,
  handleActive,
  ...restProps
}: LinkOptionButtonProps) {
  return (
    <>
      <div className="mt-6 text-white">
        <div className="grid h-full grid-cols-2 rounded-lg bg-accent">
          <div
            className={`flex cursor-pointer select-none items-center justify-center rounded-lg py-4 px-6 text-center ${
              active === 'username' ? 'bg-white text-slate-800' : ''
            }`}
            onClick={() => handleActive('username')}
          >
            <h2>With User Name</h2>
          </div>
          <div
            className={`flex cursor-pointer select-none items-center justify-center rounded-lg py-4 px-6 text-center ${
              active === 'random' ? 'bg-white text-slate-800' : ''
            }`}
            onClick={() => handleActive('random')}
          >
            <h2>With Out User Name</h2>
          </div>
        </div>
      </div>

      <CustomLink active={active} />
    </>
  );
};
