import { useEffect, useState } from "react";
import AddButton from "./Components/AddButton";
import Header from "./Components/Header";
import TodoModal from "./Components/TodoModal";
import { Toaster } from "react-hot-toast";

import { useSelector } from "react-redux";
import Task from "./Components/Task";
import SmallAddBtn from "./Components/SmallAddBtn";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const items = useSelector((state) => state.todo.todoList);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <>
      {sticky && <SmallAddBtn setModalOpen={setModalOpen} />}
      <Header />
      <div className="container p-2 mt-6 grid grid-cols-1 md:grid-cols-3  max-w-[1300px] mx-auto  gap-8 w-full">
        <AddButton setModalOpen={setModalOpen} />
        {items.map((elem, index) => (
          <Task task={elem} key={index} />
        ))}
      </div>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: "1rem",
            zIndex: 9999,
          },
        }}
      />
    </>
  );
};

export default App;
