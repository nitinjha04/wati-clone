import { Handle, Position } from "@xyflow/react";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { MdDelete } from "react-icons/md";

import { deleteEdges } from "../../store/reducers/node";
import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";

import { closeModal, openModal } from "../../store/reducers/modal";
import Modal from "../Modal";

const QuestionNode = ({ data, id, isConnectable }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [questionText, setQuestionText] = useState("");
  console.log(questionText);
  const [equalToCondition, setEqualToCondition] = useState("");

  const conditionModal = (
    <div>
      <div className=" py-5 font-semibold text-sm pb-5">
        <h4 className=" mb-3">Question text</h4>
        <div className=" flex flex-col gap-3 justify-evenly rounded-md">
          <div className="relative rounded  bg-[#F0F5F6]">
            <textarea
              value={questionText}
              onChange={(e) => {
                setQuestionText(e.target.value);
              }}
              rows="3"
              className="bg-[#F0F5F6] rounded block w-full p-2 outline-none resize-none"
            />
            <hr />
            <div className="bg-[#F0F5F6] py-2 w-full px-1">
              <button className=" ml-auto  justify-end flex items-end text-center bg-[#44B26E] text-white px-4 py-1 rounded ">
                Variables
              </button>
            </div>
          </div>
          <hr />
          <div>
            <h4 className=" mb-3">Add answer variant</h4>
            <div className="relative rounded bg-[#F0F5F6] flex">
              <input
                placeholder="Hi!"
                type="text"
                className="bg-[#F0F5F6] text-sm  rounded block h-9 w-full p-2 outline-none  pr-24"
              />
              <div className="bg-[#F0F5F6] py-2 w-full px-1">
                <button className=" ml-auto  justify-end flex items-end text-center bg-[#44B26E] text-white px-4 py-1 rounded ">
                  Create
                </button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="flex justify-end items-end gap-3">
        <button
          onClick={() => {
            setIsModalOpen(false);
          }}
          className="rounded border-[#44B26E] text-[#44B26E] border-[1px] py-1 px-4"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setIsModalOpen(false);
          }}
          className="rounded border-[#44B26E] bg-[#44B26E] text-white border-[1px] py-1 px-4"
        >
          Save
        </button>
      </div>
    </div>
  );
  return (
    <div key={data.id} className=" text-updater-node w-80">
      <div className="relative group shadow-2xl bg-white rounded-lg border-[1px] border-solid">
        <Handle
          className=" absolute bg-yellow-500 group-hover:bg-white border-[1px] group-hover:border-solid group-hover:border-yellow-500 border-none h-2 w-2  top-1/2  -left-1 transform-none"
          id={`yellow-${data.id}`}
          type="source"
          position={Position.Left}
          isConnectable={isConnectable}
        />{" "}
        <Handle
          className=" absolute bg-yellow-500 group-hover:bg-white border-[1px] group-hover:border-solid group-hover:border-yellow-500 border-none h-2 w-2  top-1/2  -right-1 transform-none"
          id={`yellow-2-${data.id}`}
          type="target"
          position={Position.Right}
          isConnectable={isConnectable}
        />
        <div
          onDoubleClick={() => {
            // dispatch(openModal(conditionModal));
            setIsModalOpen(true);
          }}
          className=" cursor-move flex p-3 gap-16 justify-between rounded-t-lg  bg-customYellow"
        >
          <div className=" flex gap-3 my-auto items-center">
            <div className=" justify-center my-auto bg-customLightYellow h-9 w-9 mx-auto items-center rounded-full flex ">
              <img
                src="/question.svg"
                alt="question Icon"
                className=" w-6 h-6 mx-auto items-center "
              />
            </div>
            <div className=" font-medium text-base text-white">Question</div>
          </div>
          <div
            onClick={() => {
              dispatch(deleteEdges(data.id));
            }}
            className=" z-20 cursor-pointer right-4 my-auto text-center items-center text-black h-8 w-8 "
          >
            <div className=" bg-white shadow-xl h-8 w-8  rounded-full text-center items-center my-auto mx-auto flex justify-center  ">
              {" "}
              <img src="/delete.svg" alt="delete" />
            </div>
          </div>
        </div>
        <div className="flex-wrap  max-w-80 flex gap-2 p-4 font-medium text-xs">
          {!!questionText ? questionText : <br />}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          heading="question"
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          {conditionModal}
        </Modal>
      )}
    </div>
  );
};

export default QuestionNode;
