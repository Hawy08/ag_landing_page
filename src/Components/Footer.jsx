import React from 'react'
import Feedbackform from '../Semicomponents/Feedbackform'
import Copyright from '../Semicomponents/Copyright';

function Footer() {
  return (
    <div className="flex justify-center w-full mt-4 bg-[#EDEADE] p-8 py-20 flex-col">
      <div className=''>
        
      <div className="grid w-4/5 grid-cols-4 bg-red-400 ">
        <div className="flex flex-col gap-4 text-gray-500">
          <p className="text-lg font-semibold">About Us</p>
          <p>Team</p>
          <p>Team</p>
          <p>Team</p>
        </div>
        <div className="flex flex-col gap-4 text-gray-500">
          <p className="text-lg font-semibold">Check Out</p>
          <p>Feature</p>
          <p>Feature</p>
          <p>Feature</p>
          <p>Feature</p>
        </div>
        <div className="flex flex-col gap-4 text-gray-500 ">
          <p className="text-lg font-semibold">Socials</p>
          <p>Facebook</p>
          <p>Facebook</p>
          <p>Facebook</p>
          <p>Facebook</p>
        </div>
        <div>
          <Feedbackform />
        </div>
      </div>
      <Copyright/>
      </div>
    </div>
  );
}

export default Footer