import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./utils/Sidebar";
import Flow from "./components/Flow";
import Modal from "./components/Modal";

function App() {
  const [bar, setBar] = useState(true);

  

  return (
    <div className=" flex flex-col h-screen w-full">
      <div className="px-5 sticky border-b-[1px] border-solid z-20 w-screen top-0 left-0 bg-white py-4 lg:hidden flex">
        <div>
          <img
            onClick={() => setBar(!bar)}
            className={`transform ${
              bar ? "rotate-0" : "rotate-180"
            } transition-transform duration-300`}
            src="/sidebarIcon.png"
            alt="sidebarIcon"
          />
        </div>
      </div>
      <div className="flex w-full h-screen ">
        {/* Sidebar */}
        <div
          className={` lg:hidden flex flex-col h-full z-20 bg-white  border-r-2 border-solid lg:static fixed top-0 left-0  w-72  transform ${
            bar ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className=" p-4">
            <img
              onClick={() => setBar(!bar)}
              className={`transform ${
                bar ? "rotate-0" : "rotate-180"
              } transition-transform duration-300`}
              src="/sidebarIcon.png"
              alt="sidebarIcon"
            />
          </div>
          <Sidebar setBar={setBar} bar={bar} />
        </div>
        <div
          className={` lg:flex hidden h-full z-20 bg-white  border-r-2 border-solid lg:static fixed top-0 left-0  w-72  transform ${
            bar ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <Sidebar />
        </div>

        {/* React FLow */}
        <div className=" h-full w-full">
          {" "}
          <Flow />
        </div>
        {/* <div
          className={` z-10 w-full h-full ${
            bar && "bg-black opacity-50 fixed top-0 left-0 inset-0"
          }  `}
        >
          <Flow />
        </div> */}
      </div>
      {/* Overlay */}
      {bar && (
        <div
          onClick={() => setBar(!bar)}
          className=" lg:hidden flex fixed inset-0"
        />
      )}
    </div>
  );
}

export default App;
