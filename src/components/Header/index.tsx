import modal from 'modal-rt';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import Body from '../Credentials/Body';
import HeaderExpand from '../HeaderExpand';

export default function Header() {
  const [show, setShow] = useState<boolean>(false);
  const { data } = useSession();

  const handle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <>
      <div>
        <div className="flex w-full scale-105 items-center justify-between rounded-full bg-accent">
          <div
            onClick={handle}
            className="flex h-10 w-10 scale-90 cursor-pointer select-none items-center justify-center rounded-full bg-white p-0 text-center text-2xl font-extrabold text-accent"
          >
            <h1>{data?.user!.name![0]!.toUpperCase()}</h1>
          </div>
        </div>
      </div>
      {show && (
        <>
          <div
            onClick={handle}
            className="z-1 fixed top-0 left-0 h-full w-full"
          ></div>
          <HeaderExpand user={data?.user!.name!} />
        </>
      )}
    </>
  );
}

Header.Home = function HomeHeader() {
  const { updateModal } = useGlobalContext();
  const { data, status } = useSession();

  if (status === 'loading') return null;

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
    <div className="mb-20 flex w-full justify-end gap-5 px-5 pt-5">
      {!data?.user ? (
        <>
          <div>
            <button onClick={click}>Sign Up</button>
          </div>

          <div>
            <button onClick={click}>Sign In</button>
          </div>
        </>
      ) : (
        <Header />
      )}
    </div>
  );
};
