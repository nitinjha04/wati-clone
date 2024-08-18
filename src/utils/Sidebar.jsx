import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNode } from "../store/reducers/node";
import { IoMdArrowBack } from "react-icons/io";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [questionInput, setQuestionInput] = useState(false);
  return (
    <div className="p-5 font-medium text-base text-white  ">
      {questionInput ? (
        <div className=" flex flex-col gap-5 ">
          <div
            onClick={() => {
              setQuestionInput(false);
            }}
            className="  cursor-pointer flex gap-3 text-black text-center items-start my-auto"
          >
            <IoMdArrowBack className=" my-auto items-center text-center" />
            <p className=" my-auto font-semibold text-base ">Ask a question</p>
          </div>
          <div className=" relative cursor-pointer gap-4 rounded-md  w-full flex justify-between p-[10px] bg-customYellow">
            <p className="absolute top-0 right-1 text-xs underline ">
              under development
            </p>

            <div className="flex flex-col gap-2 justify-start items-start ">
              {" "}
              <h3>Question</h3>
              <p className=" text-xs">Ask anything to the user</p>
            </div>
            <div className=" justify-center my-auto bg-customLightYellow h-11 w-11 mx-auto items-center rounded-full flex ">
              <img
                src="/question.svg"
                alt="question Icon"
                className=" w-6 h-6 mx-auto items-center "
              />
            </div>
          </div>
          <div className=" relative cursor-pointer gap-4 rounded-md  w-full flex justify-between p-[10px] bg-customYellow">
            <p className="absolute top-0 right-1 text-xs underline ">
              under development
            </p>

            <div className="flex flex-col gap-2 justify-start items-start ">
              {" "}
              <h3>Buttons</h3>
              <p className=" text-xs">
                Choices based on
                <br />
                Button (Maximum of <br /> 3 choices)
              </p>
            </div>
            <div className=" justify-center my-auto bg-customLightYellow h-11 w-11 mx-auto items-center rounded-full flex ">
              <img
                src="/question.svg"
                alt="question Icon"
                className=" w-6 h-6 mx-auto items-center "
              />
            </div>
          </div>
          <div className=" relative cursor-pointer gap-4 rounded-md  w-full flex justify-between p-[10px] bg-customYellow">
            <p className="absolute top-0 right-1 text-xs underline ">
              under development
            </p>

            <div className="flex flex-col gap-2 justify-start items-start ">
              {" "}
              <h3>List</h3>
              <p className=" text-xs">
                Choices based on <br />
                button (Maximum of <br /> 10 choices)
              </p>
            </div>
            <div className=" justify-center my-auto bg-customLightYellow h-11 w-11 mx-auto items-center rounded-full flex ">
              <img
                src="/question.svg"
                alt="question Icon"
                className=" w-6 h-6 mx-auto items-center "
              />
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col gap-5 w-full ">
          <div
            onClick={() => {
              dispatch(addNode("textUpdater"));
            }}
            className=" cursor-pointer gap-4 rounded-md  w-full flex justify-between p-[10px] bg-customPink"
          >
            <div className="flex flex-col gap-2 justify-start items-start ">
              {" "}
              <h3>Send a message</h3>
              <p className=" text-xs">
                With no response <br /> required from visitor{" "}
              </p>
            </div>
            <div className=" justify-center my-auto bg-customLightPink h-11 w-11 mx-auto items-center rounded-full flex ">
              <img
                src="/message.svg"
                alt="Message Icon"
                className=" w-6 h-6 mx-auto items-center "
              />
            </div>
          </div>
          <div
            onClick={() => {
              setQuestionInput(true);
            }}
            className="relative cursor-pointer gap-4 rounded-md  w-full flex justify-between p-[10px] bg-customYellow"
          >
            <p className="absolute top-0 right-1 text-xs underline ">
              under development
            </p>
            <div className="flex flex-col gap-2 justify-start items-start ">
              {" "}
              <h3>Ask a question</h3>
              <p className=" text-xs">
                Ask question and store <br /> user input in variable{" "}
              </p>
            </div>
            <div className=" justify-center my-auto bg-customLightYellow h-11 w-11 mx-auto items-center rounded-full flex ">
              <img
                src="/question.svg"
                alt="question Icon"
                className=" w-6 h-6 mx-auto items-center "
              />
            </div>
          </div>
          <div
            onClick={() => {
              dispatch(addNode("connection"));
            }}
            className=" cursor-pointer  rounded-md  w-full flex justify-between p-[10px] bg-customBlue"
          >
            <div className="flex flex-col gap-2 justify-start items-start ">
              {" "}
              <h3>Set a condition</h3>
              <p className=" text-xs">
                Send message(s) <br /> based on logical condition(s){" "}
              </p>
            </div>
            <div className=" justify-center my-auto bg-customLightBlue h-11 w-11 mx-auto items-center rounded-full flex ">
              <img
                src="/condition.svg"
                alt="condition Icon"
                className=" w-6 h-6 mx-auto items-center "
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
