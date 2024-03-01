import logo from "../assets/Frame.png";


function Header() {
  return (
    <div className="py-6  flex items-center justify-between">
      <div className="w-1/4 ">
        <img src={logo} alt="logo"/>
      </div>
      <div>
        <ul className="flex justify-end gap-4 font-semibold text-sm">
          <li>Home</li>
          <li>Features</li>
          <li>About us</li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
