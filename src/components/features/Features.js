import '../../tailwind.css';
import FeatureElement from "./FeatureElement";
import './Features.css';

export default function Features() {
    return (
        <section className="w-full bg-[url(https://razorpay.com/build/browser/static/features-bg.61935438.svg)]
            bg-no-repeat bg-origin-content bg-center bg-scroll mt-14 relative corefeaturesection">
            <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
                <h2 className="font-bold text-2xl text-center text-white">Features</h2>
                <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6">
                </div>
                <p className="text-center max-w-[450px] text-white mx-auto">
                    Empower your business with all the right tools to accept online payments
                    and provide the best customer experience
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] mt-8">
                    <FeatureElement/>
                    <FeatureElement/>
                    <FeatureElement/>
                    <FeatureElement/>
                    <FeatureElement/>
                    <FeatureElement/>
                    <FeatureElement/>
                    <FeatureElement/>
                </div>

            </div>
        </section>
    );
}