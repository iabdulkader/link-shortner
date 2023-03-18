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
    <>
      <div>
        <div className="flex w-full scale-105 items-center justify-between rounded-full bg-accent">
          <div
            onClick={handle}
            className="flex h-10 w-10 scale-90 cursor-pointer select-none items-center justify-center rounded-full bg-white p-0 text-center text-2xl font-extrabold text-accent"
          >
            <h1>{user[0]!.toUpperCase()}</h1>
          </div>
        </div>
      </div>
      <HeaderExpand user={user} />
    </>
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
      {/* //   <div>
    //     <button onClick={click}>Sign Up</button>
    //   </div>

    //   <div>
    //     <button onClick={click}>Sign In</button>
    //   </div> */}
      <Header user="Abdul Kader" />
    </div>
  );
};
