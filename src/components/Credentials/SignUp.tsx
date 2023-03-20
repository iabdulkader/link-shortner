import { useState } from 'react';
import { useGlobalContext } from '../../../context/GlobalContext';
import Button from '../Button';
import Input from '../Input';
import { api } from '../../utils/trpc';

export default function SignUp() {
  const { updateModal } = useGlobalContext();
  const { mutate, isLoading } = api.user.createUser.useMutation({
    onSuccess: (data) => {
      updateModal!('signin');
    },
  });

  const [name, setName] = useState<{ value: string; error: string }>({
    value: '',
    error: '',
  });
  const [email, setEmail] = useState<{ value: string; error: string }>({
    value: '',
    error: '',
  });
  const [password, setPassword] = useState<{ value: string; error: string }>({
    value: '',
    error: '',
  });
  const [confirmPassword, setConfirmPassword] = useState<{
    value: string;
    error: string;
  }>({ value: '', error: '' });

  const signUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isError: boolean = false;
    if (!name.value || name.value.trim().length < 3) {
      isError = true;
      setName({ ...name, error: 'Name must be at least 3 characters long' });
    }
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
    if (
      !confirmPassword.value ||
      confirmPassword.value.trim() !== password.value.trim()
    ) {
      isError = true;
      setConfirmPassword({
        ...confirmPassword,
        error: 'Password does not matchs',
      });
    }

    if (isError) return;

    mutate({
      name: name.value,
      email: email.value,
      password: password.value,
    });
  };

  const switchSignIn = () => {
    updateModal!('signin');
  };

  return (
    <div className="p-8 text-slate-50">
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      <form onSubmit={signUp}>
        <div className="mb-2 flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            value={name.value}
            onChange={(e) => setName({ error: '', value: e.target.value })}
            error={name.error ? true : false}
            errorText={name.error}
          />
        </div>

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

        <div className="mb-2 flex flex-col gap-2">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword.value}
            onChange={(e) =>
              setConfirmPassword({ error: '', value: e.target.value })
            }
            error={confirmPassword.error ? true : false}
            errorText={confirmPassword.error}
          />
        </div>

        <div className="mt-5">
          <Button
            fallback="Signing Up"
            loading={isLoading}
            text="Sign Up"
            type="submit"
          />
        </div>
      </form>

      <div className="mt-5 text-center">
        <p className="text-xs lg:text-base">
          Already have an account?{' '}
          <span className="text-blue-600">
            <button onClick={switchSignIn}>Sign in</button>
          </span>
        </p>
      </div>
    </div>
  );
}
