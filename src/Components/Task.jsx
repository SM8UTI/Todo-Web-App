import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { motion as m } from "framer-motion";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../Store/Slice/TodoSlice";
import { useEffect, useState } from "react";
import UpdateModal from "./UpdateModal";
import { toast } from "react-hot-toast";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";

const style = {
  ico: "ico w-[40px] aspect-square grid place-content-center bg-indigo-700 text-xl text-neutral-50 rounded-full cursor-pointer hover:drop-shadow-glow   border-2 border-indigo-700 hover:border-2 hover:border-indigo-300 transition-all duration-300 ",
};

const Task = ({ task }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [checked, setChecked] = useState(false);
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(task.task);
    if (task.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [task.status, title]);

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({
        ...task,
        title,
        status: checked ? "incomplete" : "complete",
      })
    );
    if (task.status === "complete") {
      toast.error("Task Incompleted!");
    } else {
      toast.success("Task Completed!");
    }
  };

  return (
    <>
      <m.div
        initial={{ opacity: 0, translateY: "-20px" }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ ease: "easeInOut", duration: 0.66 }}
        className={
          "task bg-gray-800 p-4 rounded-lg relative shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] flex flex-col justify-between"
        }
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <span
              className={`text-xs font-bold ${
                task.status === "complete" ? "text-green-400" : "text-red-400"
              }`}
            >
              {task.status}
            </span>

            <span className={`text-xs text-gray-400 `}>{task.date}</span>
          </div>
          <h5
            className={`text-2xl mb-12 capitalize ${
              task.status === "complete" ? "line-through" : ""
            }`}
          >
            {task.task}
          </h5>
        </div>

        <div className="footer flex flex-row items-center gap-2 justify-between">
          <span className="text-xs text-gray-400">{task.time}</span>

          <div className="flex flex-row items-center gap-2">
            <div
              className={style.ico}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <MdModeEditOutline />
            </div>
            <div
              className={style.ico}
              onClick={() => {
                dispatch(deleteTodo(task.id));
                toast.error("Removed");
              }}
            >
              <MdDelete />
            </div>
            <div
              className={`ico w-[40px] aspect-square grid place-content-center ${
                task.status === "complete" ? "bg-white" : "bg-indigo-700"
              } text-xl text-neutral-50 rounded-full cursor-pointer hover:drop-shadow-glow   border-2 border-indigo-700 hover:border-2 hover:border-indigo-300 transition-all duration-300 `}
              onClick={handleCheck}
            >
              {task.status === "incomplete" ? (
                <BsCheckCircle />
              ) : (
                <BsCheckCircleFill className="text-indigo-600" />
              )}
            </div>
          </div>
        </div>
      </m.div>
      <UpdateModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        todo={task}
      />
    </>
  );
};

export default Task;
