import { useGlobalContext } from '../../../context/GlobalContext';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Body() {
  const { activeModal } = useGlobalContext();

  return (
    <div
      style={{
        backgroundImage: 'url(/endless-clouds.svg)',
        backgroundRepeat: 'repeat',
      }}
      className="w-full max-w-[500px] rounded-md bg-[#1a1b4b] "
    >
      {activeModal === 'signin' ? <SignIn /> : <SignUp />}
    </div>
  );
}
