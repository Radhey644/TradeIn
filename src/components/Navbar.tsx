import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-slate-900 justify-end items-center p-3 gap-3">
      <div className="order-first font-bold text-lg">TradeIn</div>
      <i className="fa-regular fa-message" style={{color:"#ffffff",fontSize:"20px"}}></i>
      <i className="fa-regular fa-bell" style={{color: "#ffffff",fontSize:"20px"}}></i>
      <img className="rounded-full w-7"  src="https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg" alt="" />
      <div className="flex flex-col relative -top-0.4">
        <span className="font-medium text-sm">Pankaj Kumar</span>
        <span className="font-light text-xs">lcb2022039@gmail.com</span>
      </div>
    </div>
  );
};

export default Navbar;
