import LinkOption from '../LinkOption';

export default function UserLinkShorten() {
  return (
    <div className="w-full">
      <div className="px-8 lg:px-6">
        <div className="mt-10 flex flex-col items-center gap-4  lg:flex-row lg:justify-center lg:gap-2">
          <div className="w-full">
            <input
              type="text"
              className="z-0 h-14 w-full rounded-lg px-5 focus:shadow focus:outline-none"
              placeholder="Paste any link"
            />
          </div>
        </div>
        <div>
          <LinkOption />
        </div>
      </div>
    </div>
  );
}
