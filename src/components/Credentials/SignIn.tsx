import { useGlobalContext } from '../../../context/GlobalContext';
import Button from '../Button';
import Input from '../Input';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import modal from 'modal-rt';

export default function SignIn() {
  const { updateModal } = useGlobalContext();
  const [email, setEmail] = useState<{ value: string; error: string }>({
    value: '',
    error: '',
  });
  const [password, setPassword] = useState<{ value: string; error: string }>({
    value: '',
    error: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isError: boolean = false;

    if (
      !email.value ||
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi.test(email.value) ===
        false
    ) {
      isError = true;
      setEmail({ ...email, error: 'Invalid Email' });
    }

    if (!password.value || password.value.trim().length < 6) {
      isError = true;
      setPassword({
        ...password,
        error: 'Password must be at least 6 characters long',
      });
    }

    if (isError) return;
    setLoading(true);

    setEmail({ ...email, error: '' });
    setPassword({ ...password, error: '' });

    signIn('credentials', {
      redirect: false,
      email: email.value,
      password: password.value,
    }).then((res) => {
      setLoading(false);
      if (res!.error) {
        if (res!.error === 'Invalid password') {
          setPassword({ ...password, error: res!.error });
          return;
        }
        setEmail({ ...email, error: res!.error });
      }
      if (res?.ok) {
        modal.close();
      }
    });
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
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email.value}
            onChange={(e) => setEmail({ error: '', value: e.target.value })}
            error={email.error ? true : false}
            errorText={email.error}
          />
        </div>

        <div className="mb-2 flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password.value}
            onChange={(e) => setPassword({ error: '', value: e.target.value })}
            error={password.error ? true : false}
            errorText={password.error}
          />
        </div>

        <div className="mt-5">
          <Button loading={loading} text="Sign In" type="submit" />
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
