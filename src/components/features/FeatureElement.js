import instantActivation from '../../assets/instant-activation.6f975aa6.svg'

export default function FeatureElement() {
    return (
        <div>
            <img src={instantActivation} alt=""
            />
            <h3 className="font-mullish text-white text-lg font-bold my-4">Instant Activation</h3>
            <p className="font-mullish text-white opacity-80">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
        </div>
    );
}