import { useGlobalContext } from '../../../context/GlobalContext';
import Button from '../Button';
import Input from '../Input';
import Body from './Body';

export default function SignIn() {
  const { updateModal } = useGlobalContext();
  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login');
  };

  const switchSignUp = () => {
    updateModal!('signup');
  };

  return (
    <div className="p-8 text-slate-50">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <form onSubmit={login}>
        <div className="mb-2 flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </div>

        <div className="mb-2 flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="mt-5">
          <Button text="Sign In" type="submit" />
        </div>
      </form>

      <div className="mt-5 text-center">
        <p className="text-xs lg:text-base">
          Don't have account?{' '}
          <span className="text-blue-600">
            <button onClick={switchSignUp}>Sign Up</button>
          </span>
        </p>
      </div>
    </div>
  );
}
