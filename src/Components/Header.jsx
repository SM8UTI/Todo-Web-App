import { BiSearch } from "react-icons/bi";

const style = {
  container:
    "flex flex-row items-center justify-between px-2 py-4 gap-6  max-w-[1300px] mx-auto",
};

const Header = () => {
  return (
    <header className={"border-b-2 border-indigo-500 stickyHeader"}>
      <div className={style.container}>
        <h1 className={"text-base md:text-2xl font-semibold whitespace-nowrap mx-auto"}>
          Todo Manager
        </h1>
        {/* <form
          className={
            "text-sm bg-gray-800 w-full max-w-[500px] flex items-center gap-2 pr-3 rounded-full"
          }
        >
          <input
            type="text"
            placeholder="Seach Todo"
            className={"bg-transparent w-full p-3 outline-none "}
          />
          <button type="submit" className={"text-base text-indigo-500"}>
            <BiSearch />
          </button>
        </form> */}
      </div>
    </header>
  );
};

export default Header;
