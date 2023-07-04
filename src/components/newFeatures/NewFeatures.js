import '../../tailwind.css';
import dotAndArrows from '../../assets/dots-with-cut.bde9e78f.png';
import NewFeatureElement from "./NewFeatureElement";
export default function NewFeatures() {
    return (
        <section className="bg-white relative">
            <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
                <img src={dotAndArrows} alt=""
                     className="absolute w-[233px] left-[300px] -top-[6rem] z-10"/>
                    <img src={dotAndArrows} alt=""
                         className="absolute w-[233px] -right-[3.5rem] -top-[6rem] z-10"/>

                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 relative z-[100]">
                            <div className="relative flex items-center z-0">
                                <h2
                                    className="text-deepBlueHead font-mullish font-extrabold text-4xl leading-[3.375rem]">
                                    New in the <span className="text-lightBlue500"> Razorpay </span> <br/> Product Suite
                                </h2>
                            </div>

                            <NewFeatureElement/>
                            <NewFeatureElement/>
                            <NewFeatureElement/>
                            <NewFeatureElement/>
                            <NewFeatureElement/>

                        </div>
            </div>
        </section>
    );
}