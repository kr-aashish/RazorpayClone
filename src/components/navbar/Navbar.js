import '../../tailwind.css';
import razorpayIcon from '../../assets/razorpay-x-logo.5cf8015e.svg';
import indianFlag from '../../assets/india-flag.6f093c6b.svg';

function Navbar() {
    return (
        <>
            <nav className="flex bg-blue-950 text-white justify-center space-x-5">
                <img
                    src={razorpayIcon}
                    alt="Razorpay logo"
                    height="30px"
                    width="125px"
                    className="py-7"
                />

                <ul className="flex space-x-4 py-7">
                    <li><a href="#">Payments</a></li>
                    <li><a href="#">Banking+</a></li>
                    <li><a href="#">Line of Credit</a></li>
                    <li><a href="#">Payroll</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
                <div className="flex space-x-2 py-5">
                    <a href="#">
                        <img src={indianFlag} alt="Indian flag" className="py-3"/>
                    </a>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Log In
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Sign Up
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;