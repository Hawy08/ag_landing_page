import logo from "../assets/Frame.png";
import { Link } from "react-scroll";



function Header() {

  
  return (
    <div className="flex items-center justify-between py-6 mb-12" >
       
      <div className="w-1/4 ">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex justify-end gap-2 text-sm font-semibold">
          <Link
            className="text-green-500"
            to="section1"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link to="section2" smooth={true} duration={200}>
            Opportunities
          </Link>
          <Link to="section3" smooth={true} duration={200}>
            Features
          </Link>
          <Link to="section4" smooth={true} duration={300}>
            Testimonials
          </Link>
          <Link to="section5" smooth={true} duration={500}>
            Contact Us
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
