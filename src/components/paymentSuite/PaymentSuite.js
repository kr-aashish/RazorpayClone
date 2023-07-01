import paymentSuiteImage from '../../assets/payment-suite.c8ef898b.png'
function PaymentSuite() {
    return (
        <>
            <div className="text-center">
                <h2 className="text-3xl content-center">Accept Payments with Razorpay Payment Suite</h2>
            </div>

            <div className=" flex justify-center items-center">
                <div>
                    <h3 className="text-2xl">Supercharge your business with the all-powerful Payment Gateway</h3>
                    <ul className="">
                        <li>100+ Payment Methods</li>
                        <li>Industry Leading Success Rate</li>
                        <li>Superior Checkout Experience</li>
                        <li>Easy to Integrate</li>
                        <li>Instant Settlements from day 1</li>
                        <li>In-depth Reporting and Insights</li>
                    </ul>
                    <button>Sign Up Now</button>
                    <a href="#">Know more</a>
                </div>
                <div>
                    <img src={paymentSuiteImage} alt="Payment suite" width="500px"/>
                </div>
            </div>
        </>
    );
}

export default PaymentSuite;