import { useEffect } from 'react';
import Button from '../Button';
import Input from '../Input';
import Link from './Link';

export default function MyLinks() {
  useEffect(() => {}, []);

  return (
    <div className="w-full max-w-[400px] lg:max-w-[630px]">
      <h1 className="mt-5 text-center text-2xl font-bold">My Links</h1>

      <Link />
    </div>
  );
}
