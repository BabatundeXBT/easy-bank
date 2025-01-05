import logo from "../images/logo.svg";
import ham from "../images/icon-hamburger.svg";
import Button from "./Button";

function Navbar() {
  return (
    <div className="z-[1] bg-white pt-5 pb-3 fixed top-0 left-0 right-0">
      <div className="flex justify-between w-[90%] md:w-[80%] m-auto text-[#9698a5] ">
      {/* text-[#2ab6d9] */}
        <div className="md:mt-3">
          <img src={logo} alt="logo" className="" />
        </div>
        <div className="md:hidden">
          <img src={ham} alt="logo" className="" />
        </div>
        <div className="hidden md:block space-x-6 md:mt-3">
          <a
            href=""
            className="md:hover:underline md:hover:text-blue-300 md:transition-all duration-300"
          >
            Home
          </a>
          <a
            href=""
            className="md:hover:underline md:hover:text-blue-300 md:transition-all duration-300"
          >
            About
          </a>
          <a
            href=""
            className="md:hover:underline md:hover:text-blue-300 md:transition-all duration-300"
          >
            Contact
          </a>
          <a
            href=""
            className="md:hover:underline md:hover:text-blue-300 md:transition-all duration-300"
          >
            Blog
          </a>
          <a
            href=""
            className="md:hover:underline md:hover:text-blue-300 md:transition-all duration-300"
          >
            Careers
          </a>
        </div>
        <div className="hidden md:block self-center items-center justify-center mb-3">
          <Button>Request Invite</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
