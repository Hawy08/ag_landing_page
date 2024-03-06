import React from "react";
import logo from "../assets/Frame.png"

function Copyright() {
  return (
    <div className="items-center justify-between py-8 my-8 text-sm md:flex">
      <img src={logo} alt="logo" className="w-16"/>
      <p>A Copyright of DuniAfrika Group 2024</p>
    </div>
  );
}

export default Copyright;
