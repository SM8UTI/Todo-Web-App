import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { motion as m } from "framer-motion";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Store/Slice/TodoSlice";

const style = {
  ico: "ico w-[40px] aspect-square grid place-content-center bg-indigo-700 text-xl text-neutral-50 rounded-full cursor-pointer hover:drop-shadow-glow   border-2 border-indigo-700 hover:border-2 hover:border-indigo-300 transition-all duration-300 ",
};

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <m.div
      initial={{ opacity: 0, translateY: "-20px" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ ease: "easeInOut", duration: 0.66 }}
      className="task bg-gray-800 p-4 rounded-lg relative shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] flex flex-col justify-between"
    >
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-400">{task.date}</span>
        <h5 className={"text-2xl mb-12 capitalize"}>{task.task}</h5>
      </div>

      <div className="footer flex flex-row items-center gap-2 justify-between">
        <span className="text-xs text-gray-400">{task.time}</span>
        <div className="flex flex-row items-center gap-2">
          <div className={style.ico}>
            <MdModeEditOutline />
          </div>
          <div
            className={style.ico}
            onClick={() => {
              dispatch(deleteTodo(task.id));
            }}
          >
            <MdDelete />
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Task;
