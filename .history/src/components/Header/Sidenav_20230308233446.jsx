import { useState } from "react";

const Sidenav = () => {
  const [showSidenav, setShowSidenav] = useState(false);

  return (
    <>
      {showSidenav ? (
        <button
          className="flex text-4xl text-textColor items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidenav(!showSidenav)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidenav(!showSidenav)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]  ease-in-out duration-300 ${
          showSidenav ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-white ">
          I am a sidenav
        </h3>
      </div>
    </>
  );
};

export default Sidenav;
