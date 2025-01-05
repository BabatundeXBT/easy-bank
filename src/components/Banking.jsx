import bank from "../images/icon-online.svg";
import budgeting from "../images/icon-budgeting.svg";
import onboarding from "../images/icon-onboarding.svg";
import api from "../images/icon-api.svg";

function Banking() {
  return (
    <div className="bg-slate-100 md:h-[500px] pt-8 pb-1">
      <div className="md:w-[80%] m-auto mb-16 ">
        <h3 className="text-5xl md:text-3xl my-5 text-center md:text-left">
          Why choose Easybank?
        </h3>
        <p className="text-[#9698a5] text-center w-[90%] m-auto md:m-0 md:w-[600px] md:text-left ">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className="grid md:grid-cols-4 md:grid-rows-1 gap-6 mt-12">
          <div className="flex justify-center flex-col gap-5 text-center md:text-left w-[90%] md:w-auto m-auto pb-6 rounded-lg ">
            <img src={bank} alt="" className="w-[25%] m-auto md:m-0" />
            <h4 className="text-2xl">Online Banking</h4>
            <p className="text-[#9698a5]">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="flex justify-center flex-col gap-5 text-center md:text-left w-[90%] md:w-auto m-auto pb-6 rounded-lg ">
            <img src={budgeting} alt="" className="w-[25%] m-auto md:m-0" />
            <h4 className="text-2xl">Simple Budgeting</h4>
            <p className="text-[#9698a5]">
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>
          <div className="flex justify-center flex-col gap-5 text-center md:text-left w-[90%] md:w-auto m-auto pb-6 rounded-lg ">
            <img src={onboarding} alt="" className="w-[25%] m-auto md:m-0" />
            <h4 className="text-2xl">Fast Onboarding</h4>
            <p className="text-[#9698a5]">
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="flex justify-center flex-col gap-5 text-center md:text-left w-[90%] md:w-auto m-auto pb-6 rounded-lg ">
            <img src={api} alt="" className="w-[25%] m-auto md:m-0" />
            <h4 className="text-2xl">Open API</h4>
            <p className="text-[#9698a5]">
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banking;
