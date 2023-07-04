import paymentLinkIcon from "../../assets/payment-links.b311e082.png";

export default function PaymentSuiteElement() {
    return (
        <div className="w-full min-h-[15rem] relative cursor-pointer">
            <img src={paymentLinkIcon} alt=""
                 className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
                                        transition-all duration-200"/>

            <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                // style="stroke-opacity: 0.15"
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
                    fill="#fff"
                ></path>
            </svg>

            <div
                className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <div>
                    <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">Payment
                        Links</h3>
                    <p className="font-mullish text-grayText mt-6">
                        Share payment link via an email, SMS, messenger, chatbot etc. and get paid
                        immediately</p>
                </div>

                <div className="flex items-center cursor-pointer group">
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
    );
}