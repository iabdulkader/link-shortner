import Link from 'next/link';

export default function HomeInfo() {
  return (
    <div>
      <div className="mt-10 text-center">
        <p className="text-xs lg:text-base">
          To make customized links,{' '}
          <span className="text-blue-600">
            <Link href="/signin">Sign in</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
