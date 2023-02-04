import PasteLink from '../Input/PasteLink';
import LinkOption from '../LinkOption';

export default function UserLinkShorten() {
  return (
    <div className="mt-10 w-full">
      <div className="px-8 lg:px-6">
        <h1 className="mb-8 text-2xl font-bold">Shorten Links</h1>
        <div className="flex flex-col items-center gap-4  lg:flex-row lg:justify-center lg:gap-2">
          <PasteLink />
        </div>
        <div>
          <LinkOption />
        </div>
      </div>
    </div>
  );
}
