import React from 'react'
// import logo from '../assets/Frame.png'

function Feedbackform() {
  return (
    <div className="p-6 bg-green-500 rounded shadow-md shadow-md-md">
      <div className="w-20">
        {/* <img src={logo} alt='logo'/> */}
        <p className='font-bold'>
          Agro<span className='text-white'>Ghala</span>
        </p>
      </div>
      <div className="w-full my-6 text-white">
        <p>Write Email to us info@agroghala.com</p>
      </div>
      <button className="p-2 my-4 font-semibold tracking-wide text-green-500 duration-500 ease-linear bg-white rounded-sm shadow-md hover:scale-105">
        Join Us
      </button>
    </div>
  );
}

export default Feedbackform