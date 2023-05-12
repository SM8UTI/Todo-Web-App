import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

import { motion as m } from "framer-motion";
import { useDispatch } from "react-redux";
import { addTodo } from "../Store/Slice/TodoSlice";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

import { format } from "date-fns";

const TodoModal = ({ modalOpen, setModalOpen }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");

  const dispatch = useDispatch();

  const exitModal = () => {
    setModalOpen(false);
    setTitle("");
    setStatus("incomplete");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      toast.error("Invalid Input!!!");
      return;
    }
    dispatch(
      addTodo({
        id: uuidv4(),
        task: title.trim(),
        status: status,
        date: format(new Date(), "p"),
      })
    );
    exitModal();
    toast.success("Successfully Task Added! 😄");
  };

  return (
    <>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full min-h-screen z-[9999]">
          <div className="bg w-full min-h-screen absolute top-0 left-0 bg-indigo-900 opacity-90 backdrop-blur-xl"></div>
          <div className="TodoModal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2	">
            <m.div
              initial={{ opacity: 0, translateY: "-20px" }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ ease: "easeInOut", duration: 0.66 }}
              className="close text-4xl cursor-pointer max-w-max ml-auto mb-1 hover:text-red-400 transition-all duration-300 -z-1"
              onClick={exitModal}
            >
              <AiFillCloseSquare />
            </m.div>
            <div className="container bg-slate-800 p-6 shadow shadow-black/30 dark:shadow-black/50 rounded-lg z-50">
              <h2 className="text-2xl relative inline-block font-bold mb-3 before:absolute before:bottom-[-.2rem] before:left-0 before:bg-indigo-500 before:w-1/2 before:h-[4px] before:rounded-full">
                Add Task
              </h2>
              <form
                className="mt-3 flex flex-col gap-3 "
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="title" className="text-md font-semibold">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Play Cricket🏏"
                    className=" w-full min-w-[300px] md:min-w-[500px] p-3 text-base text-neutral-50 outline-none rounded-sm bg-gray-700"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="status" className="text-md font-semibold">
                    Status
                  </label>
                  <select
                    name="status"
                    id="status"
                    placeholder="status"
                    className=" w-full min-w-[300px] p-3 text-sm text-neutral-800 outline-none rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Complete</option>
                  </select>
                </div>
                <div className="flex flex-row gap-3 max-w-full ml-auto mt-3">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-500 rounded-sm text-md hover:drop-shadow-glow   border-2 border-indigo-500 hover:border-2 hover:border-indigo-300 transition-all duration-300"
                  >
                    Add
                  </button>
                  <button
                    className="px-4 py-2 rounded-sm text-md bg-indigo-200 text-indigo-700 hover:text-red-600 hover:bg-red-300 transition-all duration-300"
                    onClick={exitModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoModal;
