import '../../tailwind.css';
import dotAndArrows from '../../assets/dots-with-cut.bde9e78f.png';
import testimonial from '../../assets/shailesh.4a031b54.png';
import quotes from '../../assets/quotes.svg';
import slice from '../../assets/slice.3cf8125b.png';

function Testimonials() {
    return (
        <section className="relative">

            <div className="w-11/12 max-w-[1300px] mx-auto relative py-20">

                <img src={dotAndArrows} alt=""
                     className="absolute w-[200px] top-[8rem] left-[2rem] -z-10"/>

                <h2 className="font-mullish font-extrabold text-2xl text-deepBlueHead text-center">An Experience
                    <br/>People Love to Talk About</h2>
                <div className="w-6 h-1 bg-greenLight mx-auto my-4"></div>


                <button className="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute left-0 top-1/2
                    flex justify-center items-center ">
                    <div className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center
                        mix-blend-multiply">
                        <i
                            data-feather="chevron-right"
                            className="stroke-[5px] w-6 h-6  text-gray-400 rotate-180"
                        ></i>
                    </div>
                </button>

                <button className="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute right-0 top-1/2
                flex justify-center items-center ">
                    <div className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center
                        mix-blend-multiply">
                        <i
                            data-feather="chevron-right"
                            className="stroke-[5px] w-6 h-6  text-gray-400"
                        ></i>
                    </div>
                </button>


                <div className="flex flex-col xl:flex-row max-w-[960px] items-center mx-auto my-20 space-x-[10rem]">
                    <img src={testimonial} alt=""
                         height="320px"
                         width="320px"
                         className="rounded-xl"/>

                        <div className="max-w-[400px] flex flex-col">
                            <img src={quotes} alt=""
                                 width="35px"
                                 height="40px"
                                 className="-mb-2 xl:order-1"/>
                                <p className="font-mullish text-3xl font-extralight xl:order-1">
                                    Readymade Closed Wallet Solution For Quick Refunds</p>
                                <a href="#" className="text-grayText italic underline xl:order-1">Learn More</a>
                                <p className="font-mullish font-extrabold text-2xl -order-1 xl:order-1">Lorem
                                    Ipsum</p>
                                <p className="font-mullish font-medium xl:order-1">CEO, XYZ Engineering Company</p>
                                <img src={slice} alt="" width="80px" height="40px"
                                     className=" xl:order-1"/>
                        </div>
                </div>

                <div className="w-full flex flex-row mx-auto space-x-2 justify-center">
                    <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

                    <div className="h-[10px] w-[10px] bg-lightBlue300 rounded-full"></div>

                    <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

                    <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

                    <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

                    <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

                </div>

            </div>

        </section>
    );
}

export default Testimonials;