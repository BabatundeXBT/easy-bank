import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import Button from "./Button";

function Footer() {
  return (
    <div className="bg-stone-600 flex items-center justify-center flex-col gap-5 text-white text-center">
      <div className="mt-10 mb-4">
        <img src={logo} alt="logo" className="" />
        <div className="flex items-center justify-center gap-4 mt-8">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={pinterest} alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="">
        <div className="space-y-2">
          <p> About Us</p>
          <p>Contact</p>
          <p>Blog</p>
        </div>
        <div className="space-y-2 mt-2">
          <p>Careers</p>
          <p>Support</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="mb-10">
        <Button>Request Invite</Button>
        <p>© Easybank. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
