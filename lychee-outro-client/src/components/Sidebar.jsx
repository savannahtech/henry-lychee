import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="border-l-[2px] border-gray-300 font-semibold cursor-pointer">
        <p className="pl-[20px] hover:font-bold py-[20px]">Texts</p>
        <p className="pl-[20px] hover:font-bold py-[20px]">Logo</p>
        <p className="pl-[20px] hover:font-bold py-[20px] border-l-[2px] border-[#2237FF] text-[#2237FF]">Outro</p>
        <p className="pl-[20px] hover:font-bold py-[20px]">B-roll</p>
        <p className="pl-[20px] hover:font-bold py-[20px]">Custom brand kit</p>
      </div>
    </>
  );
};

export default Sidebar;
