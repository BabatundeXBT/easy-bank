import Button from "../components/Button";
import desktop from "../images/bg-intro-desktop.svg";
import mobile from "../images/bg-intro-mobile.svg";
import mockup from "../images/image-mockups.png";

function Hero() {
  return (
    <div className="">
      <div className="md:w-[80%] m-auto md:flex mt-14 md:mt-[15%] md:mb-5">
        <div className="md:hidden bg-[url(${mobile})]">
          <img src={mobile} alt="" className="w-[100%] top-[0]" />
          <img src={mockup} alt="" className="top-[-10%] absolute " />
        </div>

        <div className=" w-[90%] m-auto text-center md:text-left">
          <h3 className="text-4xl md:text-8xl py-4 md:w-[800px]">
            Next generation digital banking
          </h3>
          <p className="py-4 md:text-4xl md:w-[800px] text-[#9698a5]">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div className="pt-3 pb-8">
            <Button>Request Invite</Button>
          </div>
        </div>
        <div className="hidden  md:flex  top-0 ">
          <img src={desktop} alt="" className="absolute  top-[-13%] right-[-16%] w-[60%] "/>
          <img src={mockup} alt="" className="absolute top-[-3%] right-[-7%]"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
