import Navbar from "./components/navbar/Navbar";
import LandingComponent from "./components/landingInterface/LandingComponent";
import PaymentSuiteBox from "./components/paymentSuiteHeader/PaymentSuiteBox";
import PaymentSuite from "./components/paymentSuite/PaymentSuite";
import Footer from "./components/footer/Footer";
import FooterComponent from "./components/footer/FooterComponent"
import PaymentSuiteHeader from "./components/paymentSuiteHeader/paymentSuiteHeader";
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
          {/*<NewFeatures/>*/}
          {/*<Features/>*/}
          <RazorpayCustomers/>
          <Testimonials/>
          <FooterComponent/>
          <Footer/>
      </div>
  );
}

export default App;
