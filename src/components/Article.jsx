import currency from "../images/image-currency.jpg";
import rest from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import confetti from "../images/image-confetti.jpg";

function Article() {
  return (
    <div className="md:w-[80%] m-auto mb-16">
      <h3 className="text-4xl md:text-3xl my-5 text-center md:text-left">
        Latest Articles
      </h3>
      <div className="grid md:grid-cols-4 md:grid-rows-1 gap-6 mt-8">
        <div className="w-[90%] md:w-auto m-auto pb-6 rounded-lg bg-slate-100">
          <div className="rounded-lg">
            <img src={currency} alt="" className="" />
          </div>
          <p className="text-[10px] w-[92%] md:w-[80%] m-auto text-left my-4 md:my-8 text-[#9698a5]">
            By Claire Robinson
          </p>
          <h3 className="text-[20px] md:text-[22px] w-[92%] md:w-[80%] m-auto text-left">
            Receive money in any currency with no fees
          </h3>
          <p className="text-[15px] md:text-[20px] w-[92%] md:w-[80%] m-auto text-left my-4 text-[#9698a5]">
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single …
          </p>
        </div>
        <div className="w-[90%] md:w-auto m-auto pb-6  rounded-lg bg-slate-100">
          <img src={rest} alt="" />
          <p className="text-[10px] w-[92%] md:w-[80%] m-auto text-left my-4 md:my-8 text-[#9698a5]">
            By Wilson Hutton
          </p>
          <h3 className="text-[20px] md:text-[22px] w-[92%] md:w-[80%] m-auto text-left">
            Treat yourself without worrying about money
          </h3>
          <p className="text-[15px] md:text-[20px] w-[92%] md:w-[80%] m-auto text-left my-4 text-[#9698a5]">
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …
          </p>
        </div>
        <div className="w-[90%] md:w-auto m-auto pb-6 md:max-h-full rounded-lg bg-slate-100">
          <img src={plane} alt="" />
          <p className="text-[10px] w-[92%] md:w-[80%] m-auto text-left my-4 md:my-8 text-[#9698a5]">
            By Wilson Hutton
          </p>
          <h3 className="text-[20px] md:text-[22px] w-[92%] md:w-[80%] m-auto text-left">
            Take your Easybank card wherever you go
          </h3>
          <p className="text-[15px] md:text-[20px] w-[92%] md:w-[80%] m-auto text-left my-4 text-[#9698a5]">
            {" "}
            We want you to enjoy your travels. This is why we don’t charge any
            fees on purchases while you’re abroad. We’ll even show you …
          </p>
        </div>
        <div className="w-[90%] md:w-auto m-auto pb-6 md:max-h-full rounded-lg bg-slate-100">
          <img src={confetti} alt="" />
          <p className="text-[10px] w-[92%] md:w-[80%] m-auto text-left my-4 md:my-8 text-[#9698a5]">
            By Claire Robinson
          </p>
          <h3 className="text-[20px] md:text-[22px] w-[92%] md:w-[80%] m-auto text-left">
            Our invite-only Beta accounts are now live!
          </h3>
          <p className="text-[15px] md:text-[20px] w-[92%] md:w-[80%] m-auto text-left my-4 text-[#9698a5]">
            After a lot of hard work by the whole team, we’re excited to launch
            our closed beta. It’s easy to request an invite through the site ...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Article;
