import modal from 'modal-rt';
import Link from 'next/link';
import { useGlobalContext } from '../../context/GlobalContext';
import Body from '../Credentials/Body';

export default function HomeInfo() {
  const { updateModal } = useGlobalContext();

  const openSignIn = () => {
    updateModal!('signin');
    modal(<Body />);
  };

  return (
    <div>
      <div className="mt-10 text-center">
        <p className="text-xs lg:text-base">
          To make customized links,{' '}
          <span className="text-blue-600">
            <button onClick={openSignIn}>Sign in</button>
          </span>
        </p>
      </div>
    </div>
  );
}
