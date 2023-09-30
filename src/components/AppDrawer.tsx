"use client"
import React, { useState } from "react";

const AppDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <i
        className="fa-solid fa-bars fa-lg relative -top-11 left-2"
        style={{ color: "white" }}
        onClick={() => {
          setOpen(!open)
        }}
      ></i>
      {<div className={`w-${open?"auto":0} duration-1000 ease-in-out`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum magni
        laborum fugiat sed facere? Eos cumque officiis quaerat, vel nam
        praesentium sit quis architecto sed, tenetur deleniti eius modi animi in
        corporis quas quae, officia soluta. Molestias esse tempora minus quaerat
        iusto ducimus quod aperiam asperiores nulla, itaque beatae quae, odit
        ratione similique libero. Culpa id necessitatibus quod! Quasi vitae
        nihil exercitationem doloribus autem et eaque id praesentium distinctio
        harum sapiente velit earum magnam unde inventore saepe, aliquam neque
        beatae. Debitis ipsa dignissimos blanditiis ab cupiditate repellendus
        aliquid natus? Iusto.
      </div>}
    </>
  );
};

export default AppDrawer;
