import { useRouter } from 'next/router';
import Header from '../../components/Header';
import UserLinkShorten from '../../components/UserLinkShorten';

export default function User() {
  const router = useRouter();

  const { user } = router.query;

  return (
    <div>
      <div className="container text-center">
        <Header user={'User'} />

        <div className="flex w-full justify-center">
          <div className="flex w-full max-w-[1100px] flex-col gap-5 lg:flex-row">
            <UserLinkShorten />
            <UserLinkShorten />
          </div>
        </div>
      </div>
    </div>
  );
}
