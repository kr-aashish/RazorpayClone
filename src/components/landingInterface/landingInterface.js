import homeDesktop from '../../assets/home-desktop.4a9233fc.jpg';
import sectionShape from '../../assets/section-shape.svg';
export default function LandingInterface() {
    return (
        <section
            className="relative bg-deepBlue">

            <div className="w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto ">
                <div className="space-y-8">
                    <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-white">Power your finance, grow
                        your business</h1>
                    <div className="w-6 h-1 bg-greenLight"></div>
                    <p className="font-mullish text-[18px] leading-7 text-white opacity-70">
                        Accept payments from customers. Automate payouts to vendors &
                        employees. Never run out of working capital.
                    </p>
                    <button
                        className="bg-lightBlue text-white  py-[14px] px-[18px] rounded-md font-mullish font-bold
          hover:bg-lightBlue500 transition-all duration-200"
                    >Sign Up Now
                    </button>
                </div>
                <img src={homeDesktop} alt=""
                     className="w-full max-w-[680px]"/>
            </div>

            <div className="w-[103%] absolute left-0 right-0">
                <img src={sectionShape} alt=""
                     className="w-full object-fill "/>
            </div>

        </section>
    );
}