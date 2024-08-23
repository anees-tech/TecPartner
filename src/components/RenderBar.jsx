import React from 'react'
import { Link } from 'react-router-dom'

const RenderBar = () => {
  return (
    <div
      className="bg-[#15307c] flex items-center justify-between py-8  px-16"
    >
      <h1 className="text-3xl text-white font-semibold">
        Ready For Next Career Move{" "}
      </h1>
      <Link to="/ContactUs">
        <button className="py-[12px] px-[30px] rounded-full bg-white text-sm font-bold text-[#15307c]">
          GET STARTED
        </button>
      </Link>
    </div>
  );
}

export default RenderBar