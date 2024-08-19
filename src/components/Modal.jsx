import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";

const Modal = ({
  onClose,
  children,
  heading = "condition",
}) => {
  useEffect(() => {
    const modalRoot = document.createElement("div");
    modalRoot.id = "modal-root";
    document.body.appendChild(modalRoot);

    return () => {
      document.body.removeChild(modalRoot);
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
        >
          <FaTimes className="h-6 w-6" />
        </button>

        <div className=" pb-9 px-7">
          <div>
            <h3 className=" font-semibold text-bases border-b-[1px] border-solid pb-5 ">
              Set a {heading}{" "}
              <a
                className="italic underline text-blue-400 font-normal text-sm  "
                href=""
              >
                How to use
              </a>{" "}
            </h3>
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
