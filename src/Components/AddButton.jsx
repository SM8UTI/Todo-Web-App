import { AiOutlinePlus } from "react-icons/ai";

const AddButton = ({ setModalOpen }) => {
  return (
    <div
      className={
        "w-full bg-indigo-600 grid place-content-center rounded-lg cursor-pointer hover:drop-shadow-glow   border-2 border-indigo-700 hover:border-2 hover:border-indigo-300 transition-all duration-300 min-h-[200px]"
      }
      onClick={() => setModalOpen(true)}
    >
      <AiOutlinePlus className={"text-6xl "} />
    </div>
  );
};

export default AddButton;
