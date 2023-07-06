import PaymentSuite from "./components/paymentSuite/PaymentSuite";
import Footer from "./components/footer/Footer";
import FooterComponent from "./components/footer/FooterComponent"
import RazorpayCustomers from "./components/razorpayCustomers/RazorpayCustomers";
import Testimonials from "./components/testimonials/Testimonials";
import RazopayX from "./components/razorpayX/RazorpayX";
import Features from "./components/features/Features";
import NewFeatures from "./components/newFeatures/NewFeatures";
import NavigationBar from "./components/navbar/NavigationBar";
import LandingInterface from "./components/landingInterface/landingInterface";

function App() {
    return (
        <div className="overflow-x-hidden relative w-full">
            <NavigationBar/>
            <LandingInterface/>
            <PaymentSuite/>
            <RazopayX/>
            <NewFeatures/>
            <Features/>
            <RazorpayCustomers/>
            <Testimonials/>
            <FooterComponent/>
            <Footer/>
        </div>
    );
}

export default App;
