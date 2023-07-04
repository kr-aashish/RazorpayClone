import razorpayXIcon from "../../assets/razorpayXicon.svg";
import instantSettlementBackground from '../../assets/instant-settlements-bg.b4569475.svg';
import instantSettlement from '../../assets/instant-settlements.b6b6e467.svg'

export default function NewFeatureElement() {
    return (
        <div
            className="p-10 bg-[url()] w-full max-h-[300px] cursor-pointer
                                  bg-no-repeat hover:scale-105 transition-all duration-200
                                  hover:bg-[url()]
                                  bg-white"
            style={{backgroundImage: 'url(https://razorpay.com/build/browser/static/instant-settlements-bg.b4569475.svg)'}}>
            <img src={razorpayXIcon} alt=""
                 className="w-10 h-10"/>
            <h3 className="font-mullish text-lg font-bold pt-4">Corporate Cards</h3>
            <p
                className="font-mullish py-3 text-grayText leading-normal"
            >Simplify your recurring, international and team expenses with savings on every
                spend. Save upto 10 lacs every month.</p>
            <div className="flex flex-row items-center cursor-pointer group">
                <a href=""
                   className="font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue
                                            transition-all duration-200">Know More</a>
                <i
                    data-feather="chevron-right"
                    className="w-5 h-5 text-lightBlue500
                                            group-hover:text-grayBlue transition-all duration-200"></i>
            </div>

        </div>
    );
}