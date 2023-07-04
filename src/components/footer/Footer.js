import '../../tailwind.css';
import logoDark from '../../assets/razorpay-logo.5cdb58df.svg';
import pciCertificate from '../../assets/pci-compliant.f0aea468.png';
import isoCertificate from '../../assets/iso-certified.4fd701ec.jpg';
import facebookLogo from '../../assets/facebook.c8412162.svg';
import linkedinLogo from '../../assets/linkedin.f28970d6.svg';
import githubLogo from '../../assets/github.cede60eb.svg';
import instagramLogo from '../../assets/instagram.136e6800.svg';
import twitterLogo from '../../assets/twitter.1da3bf4c.svg';
import './Footer.css';

function Footer() {
    return (
        <footer
            className="-mt-[400px] md:-mt-[300px]"
        >
            <div
                className="w-10/12 pt-[400px] pb-10 md:pt-[350px] md:my-0 md:w-11/12 max-w-[1080px] mx-auto flex flex-col space-y-6 lg:space-y-0 lg:space-x-4 lg:flex-row justify-between"
            >
                <div className="flex flex-col md:max-w-[340px] lg:max-w-[260px]">
                    <img
                        src={logoDark}
                        loading="lazy"
                        width="120px"
                        height="24px"
                    />
                    <p className="text-sm text-grayText my-3 font-mullish">
                        Razorpay is the only payments solution in India that allows
                        businesses to accept, process and disburse payments with its product
                        suite. It gives you access to all payment modes including credit
                        card, debit card, netbanking, UPI and popular wallets including
                        JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
                    </p>
                    <p className="text-sm text-grayText my-3 font-mullish">
                        RazorpayX supercharges your business banking experience, bringing
                        effectiveness, efficiency, and excellence to all financial
                        processes. With RazorpayX, businesses can get access to
                        fully-functional current accounts, supercharge their payouts and
                        automate payroll compliance.
                    </p>
                    <p className="text-sm text-grayText my-3 font-mullish">
                        Manage your marketplace, automate bank transfers, collect recurring
                        payments, share invoices with customers and avail working capital
                        loans - all from a single platform. Fast forward your business with
                        Razorpay.
                    </p>
                    <p className="text-[0.625rem] text-grayText my-3 font-mullish">
                        Disclaimer: The RazorpayX powered Current Account and VISA corporate
                        credit card are provided by RBI licensed banks. Your RazorpayX
                        powered account is provided by our partner bank, in accordance with
                        RBI regulations. RazorpayX itself is not a bank and doesn't hold or
                        claim to hold a banking license.
                    </p>
                    <div className="flex items-start space-x-4">
                        <img
                            src={pciCertificate}
                            loading="lazy"
                            width="92"
                            height="40"
                            className="cursor-pointer"
                        />
                        <img
                            src={isoCertificate}
                            loading="lazy"
                            width="122"
                            height="80"
                            className="cursor-pointer"
                        />
                    </div>
                </div>
                <div
                    className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-between"
                >
                    <div className="space-y-3">
                        <div>
                            <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                                BANKING PLUS
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >RazorpayX</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Current Accounts</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Payouts</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Payout Links</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Corporate Credit Card</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        View Live Demo <span
                                            className="text-white font-mullish uppercase bg-green-500 rounded-sm text-xs font-bold p-1"
                                        > New</span
                                        >
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                                LENDING
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Razorpay Capital</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Instant Settlements</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Working Capital Loans</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Marketplace Instant Settlements</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                                RISK & FRAUD
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Thirdwatch</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        PrePay CoD
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                                BECOME A PARTNER
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Refer and Earn</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        Onboarding APIs
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                                MORE
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Route</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Invoices</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Freelancer Payments</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >International</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Flash Checkout</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >UPI</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >ePOS</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Checkout Demo</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >RazorpayX Payroll</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                                ACCEPT PAYMENTS
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Payment Gateway</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Payment Pages</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Payment Links</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >QR Codes</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Subscriptions</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        Smart Collect
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                                DEVELOPERS
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Docs</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Integrations</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >API Reference</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                                RESOURCES
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Blog</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        Customer Stories
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        Events
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        Chargeback Guide
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        Settlement Guide
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                                SOLUTIONS
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Education</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        E-commerce
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        Saas
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        BFSI
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                                FREE TOOLS
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >GST Calculator</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Online TDS Payment</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        GST Number Search
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        GST Search by PAN <span
                                            className="text-white font-mullish uppercase bg-green-500 rounded-sm text-xs font-bold p-1"
                                        >New</span
                                        >
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="font-mullish uppercase font-bold text-gray2 mb-1">
                                COMPANY
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >About Us</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish relative font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Terms of Use</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Privacy Policy</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Grievance Redressal</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        Responsible Disclosure
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        Partners
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        White Papers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >
                                        Corporate Information
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-mullish uppercase font-bold text-gray2 mb-1 mt-3">
                                HELP & SUPPORT
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Support</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                                    >Knowledge base</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-mullish uppercase font-bold text-gray2 mb-1 mt-6">
                                FIND US ONLINE
                            </p>
                            <ul className="flex space-x-4 items-center mt-4">
                                <li className="cursor-pointer">
                                    <a>
                                        <img
                                            src={facebookLogo}
                                            width="24"
                                            height="24"
                                            loading="lazy"
                                        />
                                    </a>
                                </li>
                                <li className="cursor-pointer">
                                    <a>
                                        <img
                                            src={twitterLogo}
                                            width="24"
                                            height="24"
                                            loading="lazy"
                                        />
                                    </a>
                                </li>
                                <li className="cursor-pointer">
                                    <a>
                                        <img
                                            src={instagramLogo}
                                            width="24"
                                            height="24"
                                            loading="lazy"
                                        />
                                    </a>
                                </li>
                                <li className="cursor-pointer">
                                    <a>
                                        <img
                                            src={githubLogo}
                                            width="24"
                                            height="24"
                                            loading="lazy"
                                        />
                                    </a>
                                </li>
                                <li className="cursor-pointer">
                                    <a>
                                        <img
                                            src={linkedinLogo}
                                            width="24"
                                            height="24"
                                            loading="lazy"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-mullish uppercase font-bold text-gray2 mb-1 mt-6">
                                REGD. OFFICE ADDRESS
                            </p>
                            <p className="font-mullish text-sm mt-4 whitespace-nowrap">
                                Razorpay Software Private Limited, <br/>1st Floor, SJR Cyber,
                                <br/>22 Laskar Hosur Road, Adugodi, <br/>Bengaluru, 560030,
                                <br/>Karnataka, India <br/>CIN: U72200KA2013PTC097389
                            </p>
                            <div className="font-mullish mt-6">
                                <p className="text-sm">© Razorpay 2022</p>
                                <p className="text-sm">All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;