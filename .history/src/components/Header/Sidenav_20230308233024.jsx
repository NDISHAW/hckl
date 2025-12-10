import { useState } from "react";

const Sidenav = () => {
  const [showSidenav, setShowSidenav] = useState(false);

  return (
    <div className="bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg ">
      {showSidenav ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
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
        className={`top-0 right-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg z-40  ease-in-out duration-300 ${
          showSidenav ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        skfsf;sj
      </div>
    </div>
  );
};

export default Sidenav;
