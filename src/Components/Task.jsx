import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { motion as m } from "framer-motion";

const style = {
  ico: "ico w-[40px] aspect-square grid place-content-center bg-indigo-700 text-xl text-neutral-50 rounded-full cursor-pointer hover:drop-shadow-glow   border-2 border-indigo-700 hover:border-2 hover:border-indigo-300 transition-all duration-300 ",
};

const Task = ({ task, date = "" }) => {
  return (
    <m.div
      initial={{ opacity: 0, translateY: "-20px" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ ease: "easeInOut", duration: 0.66 }}
      className="task bg-gray-800 p-4 rounded-lg relative shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] flex flex-col justify-between"
    >
      <h5 className={"text-xl mb-12"}>{task.task}</h5>

      <div className="footer flex flex-row items-center gap-2 justify-between">
        <h4>{task.date}</h4>
        <div className="flex flex-row items-center gap-2">
          <div className={style.ico}>
            <MdModeEditOutline />
          </div>
          <div className={style.ico}>
            <MdDelete />
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Task;
