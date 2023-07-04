import '../../tailwind.css';
import razorpayX from '../../assets/razorpay-x-logo.5cf8015e.svg';
import currentIcon from '../../assets/current-account.24d6f91e.svg';
import businessBanking from '../../assets/x-graphic.b40f463e.png';
import darkBackground from '../../assets/x-dark-bg.0bc3bc00.svg';

export default function RazopayX() {
    return (
        <section
            className="bg-[url()] bg-no-repeat bg-cover pb-[500px] mt-14 pt-[20rem]"
            style={{backgroundImage: 'url(https://razorpay.com/build/browser/static/x-dark-bg.0bc3bc00.svg)'}}>

            <div
                className="w-10/12 max-w-[1080px]  mx-auto relative pt-4 ">

                <h2 className="font-mullish text-center text-2xl leading-[1.2] text-white font-bold"
                >Explore Razorpay Business Banking</h2>
                <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>


                <div className="w-full min-h[440px] flex flex-col relative">
                    <img src="./images/x-flame-1.png" alt=""
                         loading="lazy"
                         className="absolute -top-[142px] -left-[140px] w-[200px]"/>

                        <img src="./images/x-flame-2.png" alt=""
                             loading="lazy"
                             className="absolute top-[150px] -right-[180px] w-[200px]"/>

                            <div
                                className="relative w-full bg-[#181c2e] p-10 py-12 border border-slate-700 z-20 rounded-md ">
                                <div className="flex flex-col justify-between items-start h-full w-full gap-12 z-20">
                                    <h3 className="font-mullish text-[28px] text-white font-bold leading-10 max-w-[500px]">
                                        Manage your company’s finances with <img src={razorpayX}
                                             alt=""
                                             width="168px"
                                             height="32px"
                                             className="inline"/>
                                        <span className="text-greenLight"> Business Banking</span>
                                    </h3>

                                    <ul className="space-y-2">
                                        <li className="font-mullish text-white flex items-center space-x-2">
                                            <i data-feather="check" className="text-greenLight"></i>
                                            <span>Open a fully digital current account
                              </span>
                                        </li>
                                        <li className="font-mullish text-white flex items-center space-x-2">
                                            <i data-feather="check" className="text-greenLight"></i>
                                            <span>Automate payables & compliment payments
                          </span></li>
                                        <li className="font-mullish text-white flex items-center space-x-2">
                                            <i data-feather="check" className="text-greenLight"></i>
                                            <span>Simplify and track spends with Corporate cards
                              </span>
                                        </li>
                                        <li className="font-mullish text-white flex items-center space-x-2">
                                            <i data-feather="check" className="text-greenLight"></i>
                                            <span>View financial insights at a glance
                              </span>
                                        </li>
                                    </ul>
                                    <div className="flex flex-col-reverse md:flex-row w-full items-center space-x-4 ">
                                        <button
                                            className="relative bg-lightBlue flex items-center
                          place-content-center md:justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md
                           font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200
                           self-stretch md:w-fit">
                                            Sign Up
                                            <div className="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg]
                              flex justify-center items-center">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    focusable="false"
                                                    className="w-[20px] h-[20px] -skew-x-[20deg] "
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </button>
                                        <div className="flex flex-row items-center cursor-pointer group">
                                            <a href="#"
                                               className="font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue
                                            transition-all duration-200"
                                            >Know More</a>
                                            <i
                                                data-feather="chevron-right"
                                                className="w-5 h-5 text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                                <img src={businessBanking} alt=""
                                     className="max-w-[600px] absolute right-0 bottom-0 z-4 hidden md:max-w-[400px] lg:max-w-[600px] md:block lg:block"/>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 my-14">
                                <div
                                    className="w-full min-h-[15rem] relative cursor-pointer featureCard2"
                                >
                                    <img
                                        src={currentIcon}
                                        className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[80] featureCardIcon transition-all duration-200"
                                    />
                                    <svg
                                        viewBox="0 0 349.32501220703125 225"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="none"
                                        className="stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"
                                        // style="stroke-opacity: 0.8"
                                    >
                                        <path
                                            d="m 0 6
                                            a 6 6 0 0 1 6 -6
                                            h 250.32501220703125
                                            a 16 16 0 0 1 11 5
                                            l 77 77
                                            a 16 16 0 0 1 5 11
                                            v 126
                                            a 6 6 0 0 1 -6 6
                                            h -337.32501220703125
                                            a 6 6 0 0 1 -6 -6
                                            z"
                                            fill="#181C2E"
                                        ></path>
                                    </svg>
                                    <div
                                        className="z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox"
                                    >
                                        <div>
                                            <h3
                                                className="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]"
                                            >
                                                Current Account
                                            </h3>
                                            <p className="font-mullish text-grayText mt-6">
                                                Current accounts for fast-growing businesses, supported by the
                                                best-in-class technology
                                            </p>
                                        </div>
                                        <div className="flex items-center cursor-pointer place-items-end">
                                            <a
                                                href="#"
                                                className="font-mullish font-bold text-lightBlue500 transition-all duration-200"
                                            >Know More</a
                                            >
                                            <i
                                                data-feather="chevron-right"
                                                className="w-5 h-5 text-lightBlue500 transition-all duration-200"
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="w-full min-h-[15rem] relative cursor-pointer featureCard2"
                                >
                                    <img
                                        src={currentIcon}
                                        className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[80] featureCardIcon transition-all duration-200"
                                    />
                                    <svg
                                        viewBox="0 0 349.32501220703125 225"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="none"
                                        className="stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"
                                        // style="stroke-opacity: 0.8"
                                    >
                                        <path
                                            d="m 0 6
                                            a 6 6 0 0 1 6 -6
                                            h 250.32501220703125
                                            a 16 16 0 0 1 11 5
                                            l 77 77
                                            a 16 16 0 0 1 5 11
                                            v 126
                                            a 6 6 0 0 1 -6 6
                                            h -337.32501220703125
                                            a 6 6 0 0 1 -6 -6
                                            z"
                                            fill="#181C2E"
                                        ></path>
                                    </svg>
                                    <div
                                        className="z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox"
                                    >
                                        <div>
                                            <h3
                                                className="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]"
                                            >
                                                Current Account
                                            </h3>
                                            <p className="font-mullish text-grayText mt-6">
                                                Current accounts for fast-growing businesses, supported by the
                                                best-in-class technology
                                            </p>
                                        </div>
                                        <div className="flex items-center cursor-pointer place-items-end">
                                            <a
                                                href="#"
                                                className="font-mullish font-bold text-lightBlue500 transition-all duration-200"
                                            >Know More</a
                                            >
                                            <i
                                                data-feather="chevron-right"
                                                className="w-5 h-5 text-lightBlue500 transition-all duration-200"
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="w-full min-h-[15rem] relative cursor-pointer featureCard2"
                                >
                                    <img
                                        src={currentIcon}
                                        className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[80] featureCardIcon transition-all duration-200"
                                    />
                                    <svg
                                        viewBox="0 0 349.32501220703125 225"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="none"
                                        className="stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"
                                        // style="stroke-opacity: 0.8"
                                    >
                                        <path
                                            d="m 0 6
                                            a 6 6 0 0 1 6 -6
                                            h 250.32501220703125
                                            a 16 16 0 0 1 11 5
                                            l 77 77
                                            a 16 16 0 0 1 5 11
                                            v 126
                                            a 6 6 0 0 1 -6 6
                                            h -337.32501220703125
                                            a 6 6 0 0 1 -6 -6
                                            z"
                                            fill="#181C2E"
                                        ></path>
                                    </svg>
                                    <div
                                        className="z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox"
                                    >
                                        <div>
                                            <h3
                                                className="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]"
                                            >
                                                Current Account
                                            </h3>
                                            <p className="font-mullish text-grayText mt-6">
                                                Current accounts for fast-growing businesses, supported by the
                                                best-in-class technology
                                            </p>
                                        </div>
                                        <div className="flex items-center cursor-pointer place-items-end">
                                            <a
                                                href="#"
                                                className="font-mullish font-bold text-lightBlue500 transition-all duration-200"
                                            >Know More</a
                                            >
                                            <i
                                                data-feather="chevron-right"
                                                className="w-5 h-5 text-lightBlue500 transition-all duration-200"
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full   items-center justify-evenly border border-slate-700
                            mb-24 gap-y-6  relative rounded-md p-8 hidden md:flex md:flex-col lg:flex-row lg:flex">

                                <p className="font-mullish text-white text-xl">Check out the live demo to learn how
                                    RazorpayX works.
                                    <span className="font-bold"> No sign-up required!</span>
                                </p>

                                <button
                                    className="relative bg-lightBlue flex items-center
                          justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md
                           font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200">
                                    Check out the demo
                                    <div className="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg]
                              flex justify-center items-center">
                                        <svg
                                            viewBox="0 0 24 24"
                                            focusable="false"
                                            className="w-[20px] h-[20px] -skew-x-[20deg] "
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                                            ></path>
                                        </svg>
                                    </div>
                                </button>

                            </div>

                </div>
            </div>
        </section>
    );
}