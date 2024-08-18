import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/reducers/modal";

import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";

const Modal = ({}) => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.open);
  const modalChildren = useSelector((state) => state.modal.modalChildren);
  if (!open) return null;

  return (
    <div
      className="absolute  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => dispatch(closeModal())}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => dispatch(closeModal())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {modalChildren}
       
      </div>
    </div>
  );
};

export default Modal;
