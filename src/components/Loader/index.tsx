export default function Loader() {
  return (
    <div
      style={{
        backgroundImage: 'url(/endless-clouds.svg)',
        backgroundRepeat: 'repeat',
      }}
      className="flex h-full min-h-screen w-full items-center justify-center bg-primary"
    >
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-slate-300"></div>
    </div>
  );
}

Loader.small = () => {
  return (
    <div className="ml-1 flex h-full w-full items-center justify-center">
      <svg
        version="1.1"
        id="L4"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
        xmlSpace="preserve"
      >
        <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"
          />
        </circle>
        <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.2"
          />
        </circle>
        <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.3"
          />
        </circle>
      </svg>
    </div>
  );
};
