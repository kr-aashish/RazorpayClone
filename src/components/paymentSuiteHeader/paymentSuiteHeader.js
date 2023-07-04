import '../../tailwind.css';
import paymentSuite from '../../assets/payment-suite.c8ef898b.png';
import dotComponent from '../../assets/dots-with-cut.bde9e78f.png'
import paymentLinkIcon from '../../assets/payment-links.b311e082.png'

function PaymentSuiteHeader() {
    return (
        <section className="relative mt-[190px] overflow-hidden overflow-x-hidden relative w-full">
            <img src={dotComponent} alt="" loading="lazy"
                 width="233"
                 height="167"
                 className="absolute -top-[8rem] left-[10rem] inline-block -z-10"/>

            <img src={dotComponent} alt="" loading="lazy"
                 width="233"
                 height="167"
                 className="absolute top-[3rem] right-0 inline-block rotate-180"/>

            <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4"/>
            <h2 className="font-mullish text-center text-2xl leading-[1.2] font-extrabold hidden md:block">Accept
                Payments with Razorpay Payment Suite</h2>

            <h2 className="font-mullish text-center text-5xl leading-[1.2] font-extrabold  md:hidden">Explore
                Razorpay Payment Suite</h2>


            <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>

            <div className="w-full min-h-[520px] bg-white flex rounded-md relative p-10 py-12 border">
                <div className="flex flex-col justify-between  w-full">
                    <h3 className="font-mullish text-[28px] leading-10 font-bold max-w-[500px]">
                        Supercharge your business with the all‑powerful <span className="text-lightBlue">Payment Gateway</span>
                    </h3>
                    <ul className="space-y-2">
                        <li className="font-mullish flex items-center space-x-2">

                            <i data-feather="check" className="text-greenLight"></i>
                            <span>100+ Payment Methods</span>
                        </li>
                        <li className="font-mullish flex items-center space-x-2">
                            <i data-feather="check" className="text-greenLight"></i>
                            <span> Industry Leading Success Rate </span>
                        </li>
                        <li className="font-mullish flex items-center space-x-2">
                            <i data-feather="check" className="text-greenLight"></i>
                            <span> Superior Checkout Experience </span>
                        </li>
                        <li className="font-mullish flex items-center space-x-2">
                            <i data-feather="check" className="text-greenLight"></i>
                            <span> Easy to Integrate </span>
                        </li>
                        <li className="font-mullish flex items-center space-x-2">
                            <i data-feather="check" className="text-greenLight"></i>
                            <span> Instant Settlements from day 1 </span>
                        </li>
                        <li className="font-mullish flex items-center space-x-2">
                            <i data-feather="check" className="text-greenLight"></i>
                            <span> In-depth Reporting and Insights </span>
                        </li>
                    </ul>

                    <div className="flex flex-col-reverse md:flex-row items-center space-x-4 ">
                        <button
                            className="bg-lightBlue w-full md:w-fit text-white py-[14px] px-[18px] rounded-md
                  font-mullish font-bold hover:bg-lightBlue500 translate-all duration-200 "
                        >Sign Up Now
                        </button>
                        <div className="flex self-start md:items-center cursor-pointer group">
                            <a href="#"
                               className="font-mullish font-bold text-lightBlue500
                      group-hover:text-grayBlue transition-all duration-200"
                            >Know More</a>
                            <i
                                data-feather="chevron-right"
                                className="w-5 h-5 text-lightBlue500
                      group-hover:text-grayBlue transition-all duration-200"></i>
                        </div>
                    </div>

                </div>
                <img src={paymentSuite} alt=""
                     className="max-w-[600px] absolute right-0 bottom-0 hidden md:max-w-[400px] lg:max-w-[600px] md:block lg:block"/>
            </div>
        </section>
    );
}

export default PaymentSuiteHeader;