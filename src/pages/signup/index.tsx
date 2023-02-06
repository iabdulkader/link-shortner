import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email: ', email);
    console.log('Password: ', password);
  };

  return (
    <div className="container flex min-h-screen items-center justify-center px-5 lg:px-0">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center rounded-lg bg-white p-6 shadow-xl"
      >
        <h2 className="mb-4 text-xl font-bold">Sign Up</h2>
        <div className="mb-4">
          <label
            className="mb-2 block font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-400 p-2 focus:border-green-700 focus:outline-none"
            id="name"
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-400 p-2 focus:border-green-700 focus:outline-none"
            id="email"
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-400 p-2 focus:border-green-700 focus:outline-none"
            id="password"
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block font-medium text-gray-700"
            htmlFor="cpassword"
          >
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-400 p-2 focus:border-green-700 focus:outline-none"
            id="cpassword"
          />
        </div>
        <Button height={11} text="Sign Up" />
        <p className="mt-5 text-sm">
          Already have account?{' '}
          <Link href="/signin">
            <span className="text-sm text-blue-700">Sign In</span>
          </Link>
        </p>
        <p className="text-sm">
          <Link href="/">
            <span className="text-sm text-blue-700">Home</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
