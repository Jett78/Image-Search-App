import React from "react";
import { FaSearch } from "react-icons/fa";

const Navigation = ({handleSearch}) => {
  return (
    <main>
      <div className="flex justify-center items-center bg-white w-[350px] h-12 mx-auto gap-9 rounded-[10px] my-14 ">
        <FaSearch className="text-xl" />
        <form>
        <input onChange={handleSearch}  type="text" placeholder="Search image" className="bg-transparent outline-none text-l font-semibold" />
        </form>
      </div>
    </main>
  );
};

export default Navigation;
