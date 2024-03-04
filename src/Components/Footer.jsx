
import { Element } from "react-scroll";
import Feedbackform from '../Semicomponents/Feedbackform'
import Copyright from '../Semicomponents/Copyright';

function Footer() {
  return (
    <Element name="section5">
      <div className="w-full mt-4 bg-[#EDEADE] p-8 py-20">
        <div className="flex justify-center">
          <div className="grid w-4/5 grid-cols-4">
            <div className="flex flex-col gap-4 text-gray-500">
              <p className="text-lg font-semibold">About Us</p>
              <p>DuniAfrika</p>
              <p>Team</p>
              <p>Contact Us</p>
            </div>
            <div className="flex flex-col gap-4 text-gray-500">
              <p className="text-lg font-semibold">Check Out</p>
              <p>Home</p>
              <p>Opportunities</p>
              <p>Features</p>
              <p>Testimonials</p>
            </div>
            <div className="flex flex-col gap-4 text-gray-500 ">
              <p className="text-lg font-semibold">Socials</p>
              <p>Facebook</p>
              <a
                href="https://www.youtube.com/channel/UC8Ag-IJLORyP1O9yoMBAeQg"
                target="_blank"
              >
                YouTube
              </a>
              <p>LinkedIn</p>
              <p>X</p>
            </div>
            <div>
              <Feedbackform />
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </Element>
  );
}

export default Footer