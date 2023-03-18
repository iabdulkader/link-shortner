import Button from '../Button';
import Input from '../Input';
import Body from './Body';

export default function SignUp() {
  const signUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sign Up');
  };
  return (
    <Body>
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
              required
            />
          </div>

          <div className="mb-2 flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-2 flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>

          <div className="mb-2 flex flex-col gap-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              required
            />
          </div>

          <div className="mt-5">
            <Button text="Sign Up" type="submit" />
          </div>
        </form>

        <div className="mt-5 text-center">
          <p className="text-xs lg:text-base">
            Already have an account?{' '}
            <span className="text-blue-600">
              <a href="/signin">Sign in</a>
            </span>
          </p>
        </div>
      </div>
    </Body>
  );
}
