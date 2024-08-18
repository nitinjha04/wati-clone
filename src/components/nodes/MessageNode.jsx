import React, { useCallback, useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { useDispatch, useSelector } from "react-redux";

import { MdDelete } from "react-icons/md";
import { deleteEdges } from "../../store/reducers/node";

const MessageNode = ({ data, id, isConnectable }) => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState([]);

  const addInput = (type) => {
    setInputs((prevInputs) => [
      ...prevInputs,
      { type, id: Date.now(), file: null },
    ]);
  };

  const removeInput = (id) => {
    setInputs((prevInputs) => prevInputs.filter((input) => input.id !== id));
  };

  const handleFileUpload = (id, file) => {
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      const updatedInputs = inputs.map((input) =>
        input.id === id
          ? { ...input, file: fileUrl, fileName: file.name }
          : input
      );
      setInputs(updatedInputs);
    }
  };

  return (
    <div key={data.id} className="group text-updater-node">
      <Handle
        style={{
          background: "red",
        }}
        className="  bg-customPink group-hover:bg-white border-[1px] group-hover:border-solid group-hover:border-customPink border-none h-2 w-2 -right-1  transform-none"
        type="target"
        id={`red-${data.id}`}
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <Handle
        style={{
          background: "red",
        }}
        className="  bg-customPink group-hover:bg-white border-[1px] group-hover:border-solid group-hover:border-customPink border-none h-2 w-2 -right-1  transform-none"
        type="source"
        id={`red-${data.id}`}
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <div className=" shadow-2xl bg-white rounded-lg border-[1px] border-solid">
        <div className=" flex p-3 gap-5 justify-between rounded-t-lg  bg-customPink">
          <div className=" flex gap-3 my-auto items-center">
            <div className=" justify-center my-auto bg-customLightPink h-11 w-11 mx-auto items-center rounded-full flex ">
              <img
                src="/message.svg"
                alt="Message Icon"
                className=" w-6 h-6 mx-auto items-center "
              />
            </div>
            <div className=" font-medium text-base text-white">
              Send a message
            </div>
          </div>
          <div
            onClick={() => {
              dispatch(deleteEdges(data.id));
            }}
            className="absolute z-20 cursor-pointer right-4  top-5 text-black h-8 w-8 "
          >
            <div className=" bg-white shadow-xl h-8 w-8  rounded-full text-center items-center my-auto mx-auto flex justify-center  ">
              {" "}
              <img src="/delete.svg" alt="delete" />
            </div>
          </div>
        </div>

        {inputs.map((input) => (
          <div key={input.id} className="relative p-4 mt-2  rounded">
            {input.type === "message" && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your message"
                  className="bg-gray-100 p-2 border rounded w-full outline-none"
                />
                <div
                  onClick={() => removeInput(input.id)}
                  className="absolute z-20 cursor-pointer right-4 -bottom-4 text-black h-8 w-8 "
                >
                  <div className=" bg-white shadow-xl h-8 w-8  rounded-full text-center items-center my-auto mx-auto flex justify-center  ">
                    {" "}
                    <img src="/delete.svg" alt="delete" />
                  </div>
                </div>
              </div>
            )}
            {input.type === "image" && (
              <div className="relative">
                <div className=" relative flex flex-col">
                  <div
                    onClick={() => removeInput(input.id)}
                    className="absolute z-20 cursor-pointer right-4 -top-4 text-black h-8 w-8 "
                  >
                    <div className=" bg-white shadow-xl h-8 w-8  rounded-full text-center items-center my-auto mx-auto flex justify-center  ">
                      {" "}
                      <img src="/delete.svg" alt="delete" />
                    </div>
                  </div>
                  {input.file && (
                    <img
                      src={input.file}
                      alt="Uploaded Preview"
                      className="w-52 my-2 mx-auto items-center h-auto rounded border"
                    />
                  )}
                  <button
                    className="w-full z-10 relative bg-[#E7F4ED] border-[1px] border-[#7FBF91] text-[#7FBF91] py-1 px-2 rounded-md font-medium text-sm"
                    onClick={() =>
                      document.getElementById(`file-input-${input.id}`).click()
                    }
                  >
                    Upload image
                  </button>
                </div>
                <input
                  id={`file-input-${input.id}`}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) =>
                    handleFileUpload(input.id, e.target.files[0])
                  }
                />
              </div>
            )}
            {input.type === "video" && (
              <div className="relative">
                <div className=" relative flex flex-col">
                  <div
                    onClick={() => removeInput(input.id)}
                    className="absolute z-20 cursor-pointer right-4 -top-4 text-black h-8 w-8 "
                  >
                    <div className=" bg-white shadow-xl h-8 w-8  rounded-full text-center items-center my-auto mx-auto flex justify-center  ">
                      {" "}
                      <img src="/delete.svg" alt="delete" />
                    </div>
                  </div>
                  {input.file && (
                    <video
                      controls
                      src={input.file}
                      className="w-52 my-2 mx-auto items-center h-auto rounded border"
                    />
                  )}
                  <button
                    className="w-full z-10 relative bg-[#E7F4ED] border-[1px] border-[#7FBF91] text-[#7FBF91] py-1 px-2 rounded-md font-medium text-sm"
                    onClick={() =>
                      document.getElementById(`file-input-${input.id}`).click()
                    }
                  >
                    Upload video
                  </button>
                </div>

                <input
                  id={`file-input-${input.id}`}
                  type="file"
                  accept="video/*"
                  hidden
                  onChange={(e) =>
                    handleFileUpload(input.id, e.target.files[0])
                  }
                />
                <div
                  onClick={() => removeInput(input.id)}
                  className="absolute cursor-pointer right-4 bottom-2 text-black"
                >
                  <MdDelete className="text-xl" />
                </div>
              </div>
            )}
            {input.type === "audio" && (
              <div className="relative">
                <div className=" relative flex flex-col">
                  <div
                    onClick={() => removeInput(input.id)}
                    className="absolute z-20 cursor-pointer right-2 top-5 text-black h-8 w-8 "
                  >
                    <div className=" bg-white shadow-xl h-8 w-8  rounded-full text-center items-center my-auto mx-auto flex justify-center  ">
                      {" "}
                      <img src="/delete.svg" alt="delete" />
                    </div>
                  </div>
                  {input.file && (
                    <audio
                      controls
                      src={input.file}
                      className=" my-2 mx-auto items-center  rounded"
                    ></audio>
                  )}
                  <button
                    className="w-full z-10 relative bg-[#E7F4ED] border-[1px] border-[#7FBF91] text-[#7FBF91] py-1 px-2 rounded-md font-medium text-sm"
                    onClick={() =>
                      document.getElementById(`file-input-${input.id}`).click()
                    }
                  >
                    Upload audio
                  </button>
                </div>
                <input
                  id={`file-input-${input.id}`}
                  type="file"
                  hidden
                  accept="audio/*"
                  onChange={(e) =>
                    handleFileUpload(input.id, e.target.files[0])
                  }
                />
              </div>
            )}
            {input.type === "pdf" && (
              <div className="relative flex flex-col">
                <div className=" relative flex flex-col">
                  <div
                    onClick={() => removeInput(input.id)}
                    className="absolute z-20 cursor-pointer right-4 -top-4 text-black h-8 w-8 "
                  >
                    <div className=" bg-white shadow-xl h-8 w-8  rounded-full text-center items-center my-auto mx-auto flex justify-center  ">
                      {" "}
                      <img src="/delete.svg" alt="delete" />
                    </div>
                  </div>
                  {input.file && (
                    <div className="my-2 mx-auto w-full text-center  flex items-center justify-between border p-2 rounded">
                      <a
                        href={input.file}
                        download={input.fileName}
                        className="text-blue-500 underline cursor-pointer"
                      >
                        {input.fileName}
                      </a>
                    </div>
                  )}
                  <button
                    className="w-full z-10 relative bg-[#E7F4ED] border-[1px] border-[#7FBF91] text-[#7FBF91] py-1 px-2 rounded-md font-medium text-sm"
                    onClick={() =>
                      document.getElementById(`file-input-${input.id}`).click()
                    }
                  >
                    Upload document
                  </button>
                </div>
                <input
                  id={`file-input-${input.id}`}
                  type="file"
                  hidden
                  accept=".pdf"
                  className="p-2 border rounded w-fit text-xs"
                  onChange={(e) =>
                    handleFileUpload(input.id, e.target.files[0])
                  }
                />
              </div>
            )}
          </div>
        ))}
        <div className="flex-wrap max-w-80 flex gap-2 p-4">
          <button
            className="bg-[#E7F4ED] border-[1px] border-[#7FBF91] text-[#7FBF91] py-1 px-2  rounded-md font-normal text-sm"
            onClick={() => addInput("message")}
          >
            Message
          </button>
          <button
            className="bg-[#E7F4ED] border-[1px] border-[#7FBF91] text-[#7FBF91] py-1 px-2  rounded-md font-normal text-sm"
            onClick={() => addInput("image")}
          >
            Image
          </button>
          <button
            className="bg-[#E7F4ED] border-[1px] border-[#7FBF91] text-[#7FBF91] py-1 px-2  rounded-md font-normal text-sm"
            onClick={() => addInput("video")}
          >
            Video
          </button>
          <button
            className="bg-[#E7F4ED] border-[1px] border-[#7FBF91] text-[#7FBF91] py-1 px-2  rounded-md font-normal text-sm"
            onClick={() => addInput("audio")}
          >
            Audio
          </button>
          <button
            className="bg-[#E7F4ED] border-[1px] border-[#7FBF91] text-[#7FBF91] py-1 px-2  rounded-md font-normal text-sm"
            onClick={() => addInput("pdf")}
          >
            Document
          </button>
        </div>
      </div>
      <Handle
        style={{
          background: "red",
        }}
        className="  bg-customPink group-hover:bg-white border-[1px] group-hover:border-solid group-hover:border-customPink border-none h-2 w-2 -right-1  transform-none"
        type="source"
        id={`red-2-${data.id}`}
        position={Position.Right}
        isConnectable={isConnectable}
      />
      <Handle
        style={{
          background: "red",
        }}
        className="  bg-customPink group-hover:bg-white border-[1px] group-hover:border-solid group-hover:border-customPink border-none h-2 w-2 -right-1  transform-none"
        type="target"
        id={`red-2-${data.id}`}
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default MessageNode;
