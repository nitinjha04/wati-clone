import { Handle, Position } from "@xyflow/react";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { MdDelete } from "react-icons/md";

import { deleteEdges } from "../../store/reducers/node";
import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";

import { closeModal, openModal } from "../../store/reducers/modal";
import Modal from "../Modal";

const ConditionNode = ({ data, id, isConnectable }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [ifCondition, setIfCondition] = useState("");
  const [equalToCondition, setEqualToCondition] = useState("");

  const conditionModal = (
    <div>
      <div className=" py-5 font-semibold text-sm pb-5">
        <h4 className=" mb-3">Set the condition(s)</h4>
        <div className=" flex flex-col gap-3 justify-evenly bg-[#F0F5F6] p-2 rounded-md">
          <div className="relative rounded  bg-white">
            <div className="  absolute top-1/4 left-3 flex gap-2 my-auto items-center">
              <FaQuestionCircle />
              IF
            </div>
            <input
              value={ifCondition}
              onChange={(e) => setIfCondition(e.target.value)}
              type="text"
              className=" rounded block h-9 w-full p-2 outline-none pl-[70px] pr-24"
            />
            <button className=" absolute top-1 right-1 bg-[#44B26E] text-white px-4 py-1 rounded ">
              Variables
            </button>
          </div>
          <div className="relative rounded bg-white">
            <input
              value="Equal to"
              disabled
              type="text"
              className=" text-sm  rounded block h-9 w-full p-2 outline-none  pr-24"
            />
            <FaChevronDown className=" absolute  top-1/3 right-3" />
          </div>
          <div className="relative rounded  bg-white">
            <input
              value={equalToCondition}
              onChange={(e) => setEqualToCondition(e.target.value)}
              type="text"
              className=" rounded block h-9 w-full p-2 outline-none pr-24"
            />
            <button className=" absolute top-1 right-1 bg-[#44B26E] text-white px-4 py-1 rounded ">
              Variables
            </button>
          </div>
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
        <div className=" flex flex-col absolute gap-4 top-[40%]  right-0 w-full  justify-evenly items-end ">
          <Handle
            className=" bg-green-500 group-hover:bg-white border-[1px] group-hover:border-solid group-hover:border-green-500 border-none h-2 w-2 relative top-1/2  -right-1 transform-none"
            id={`green-${data.id}`}
            type="target"
            position={Position.Right}
            isConnectable={isConnectable}
          />
          <Handle
            className=" bg-red-500 group-hover:bg-white border-[1px] group-hover:border-solid group-hover:border-red-500 border-none h-2 w-2 relative top-1/2 -right-1 transform-none"
            id={`red-${data.id}`}
            type="target"
            position={Position.Right}
            isConnectable={isConnectable}
          />
        </div>
        <div
          onDoubleClick={() => {
            // dispatch(openModal(conditionModal));
            setIsModalOpen(true);
          }}
          className=" cursor-move flex p-3 gap-5 justify-between rounded-t-lg  bg-customBlue"
        >
          <div className=" flex gap-3 my-auto items-center">
            <div className=" justify-center my-auto bg-customLightBlue h-9 w-9 mx-auto items-center rounded-full flex ">
              <img
                src="/condition.svg"
                alt="Condition Icon"
                className=" w-6 h-6 mx-auto items-center "
              />
            </div>
            <div className=" font-medium text-base text-white">
              Set a condition
            </div>
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
          This is condition content
        </div>
      </div>
      {isModalOpen && (
        <Modal
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

export default ConditionNode;
