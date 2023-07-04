import homeDesktop from '../../assets/home-desktop.4a9233fc.jpg';
import sectionShape from '../../assets/section-shape.svg';
function LandingComponent() {
    return (
        <header className="flex flex-col">
            <div className="flex bg-deepBlue text-white px-7 justify-center">
                <div className="space-y-3 max-w-lg">
                    <h2 className="text-4xl ">Power your finance, grow your business</h2>
                    <p>Accept payments from customers. Automate payouts to vendors & employees.
                        Never run out of working capital.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Sign Up Now
                    </button>
                </div>
                <img src={homeDesktop} alt="Desktop home" className="w-full max-w-[680px]"/>
            </div>
            <img src={sectionShape} alt="UI layout shape"/>
        </header>
    );
}

export default LandingComponent;