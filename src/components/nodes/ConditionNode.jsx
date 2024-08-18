import { Handle, Position } from "@xyflow/react";

import React from "react";
import { useDispatch } from "react-redux";

import { MdDelete } from "react-icons/md";

import { deleteEdges } from "../../store/reducers/node";

const ConditionNode = ({ data, id, isConnectable }) => {
  const dispatch = useDispatch();
  return (
    <div key={data.id} className=" text-updater-node">
      <div className="relative group shadow-2xl bg-white rounded-lg border-[1px] border-solid">
        <div className=" flex flex-col absolute gap-4 top-5  right-0 w-full  justify-evenly items-end ">
          <Handle
            className=" bg-green-500 group-hover:bg-white border-[1px] group-hover:border-solid group-hover:border-green-500 border-none h-2 w-2 relative top-1/2  -right-1 transform-none"
            id={data.id}
            type="source"
            position={Position.Right}
            isConnectable={isConnectable}
          />
          <Handle
            className=" bg-red-500 group-hover:bg-white border-[1px] group-hover:border-solid group-hover:border-red-500 border-none h-2 w-2 relative top-1/2 -right-1 transform-none"
            id={`c-${data.id}`}
            type="source"
            position={Position.Right}
            isConnectable={isConnectable}
          />
        </div>
        <div className=" cursor-move flex p-3 gap-5 justify-between rounded-t-lg  bg-customBlue">
          <div className=" flex gap-3 my-auto items-center">
            <div className=" justify-center my-auto bg-customLightBlue h-11 w-11 mx-auto items-center rounded-full flex ">
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
            className=" z-20 cursor-pointer right-4  top-8 text-black h-8 w-8 "
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
    </div>
  );
};

export default ConditionNode;
