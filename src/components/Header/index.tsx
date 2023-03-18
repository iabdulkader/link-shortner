import modal from 'modal-rt';
import Link from 'next/link';
import { useState } from 'react';
import { useGlobalContext } from '../../../context/GlobalContext';
import Button from '../Button';
import { SignIn, SignUp } from '../Credentials';
import Body from '../Credentials/Body';
import HeaderExpand from '../HeaderExpand';

export default function Header({ user }: { user: string }) {
  const [show, setShow] = useState<boolean>(false);

  const handle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (e.screenX < 700) {
      console.log('Mobile');
      setShow(!show);
    }
  };

  return (
    <div className="bg-accent px-3 text-slate-50 lg:px-6">
      <div className="flex min-h-[4rem] w-full items-center justify-between">
        <div className="">
          <Link href="/" className="font-['Poppins'] text-2xl font-bold">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div
              onClick={handle}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-0 text-2xl font-extrabold text-accent"
            >
              <h1>{user[0]!.toUpperCase()}</h1>
            </div>

            <div className="hidden text-lg font-bold lg:block">{user}</div>
          </div>

          <div className="hidden lg:block">
            <h2>Signout</h2>
          </div>
        </div>
      </div>
      {show ? <HeaderExpand user={user} /> : null}
    </div>
  );
}

Header.Home = function HomeHeader() {
  const { activeModal, updateModal } = useGlobalContext();

  const click = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let active = e.currentTarget.innerText;

    if (active === 'Sign Up') {
      updateModal!('signup');
      modal(<Body />);
    } else {
      updateModal!('signin');
      modal(<Body />);
    }
  };

  return (
    <div className="absolute top-5 right-8 flex gap-5">
      <div>
        <button onClick={click}>Sign Up</button>
      </div>

      <div>
        <button onClick={click}>Sign In</button>
      </div>
    </div>
  );
};
