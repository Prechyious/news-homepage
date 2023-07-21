import mainImg from "../assets/images/image-web-3-mobile.jpg";
import mainImgDesktop from "../assets/images/image-web-3-desktop.jpg";
import retroPc from "../assets/images/image-retro-pcs.jpg";
import laptop from "../assets/images/image-top-laptops.jpg";
import controller from "../assets/images/image-gaming-growth.jpg";

const Main = () => {
    return (
        <main className="px-6 md:p-6">
            <div className="lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:grid-flow-col lg:gap-10 lg:h-[600px]">
                <div className="lg:col-span-2">
                    <img
                        className="block md:hidden"
                        src={mainImg}
                        alt="web-3"
                    />
                    <img
                        className="hidden md:block"
                        src={mainImgDesktop}
                        alt="web-3"
                    />
                </div>

                <div className="mt-5 flex flex-col gap-5 lg:col-span-1 lg:mt-16">
                    <h1 className="font-extrabold text-very-dark-blue text-5xl lg:text-7xl">
                        The Bright Future of Web 3.0?
                    </h1>
                </div>
                <div className="lg:mt-16">
                    <p className="font-bold text-grayish-blue leading-8">
                        We dive into the next evolution of the web that claims
                        to put the power of the platforms back into the hands of
                        the people. But is it really fulfilling its promise?
                    </p>
                    <div className="mt-5 lg:mt-10">
                        <button className="border px-8 py-4 uppercase text-off-white bg-soft-red tracking-[4px] font-bold hover:bg-very-dark-blue transition-all duration-300 ease-in-out">
                            Read More
                        </button>
                    </div>
                </div>

                <div className="mt-10 py-5 px-8 bg-very-dark-blue flex flex-col lg:row-span-full lg:mt-0 lg:justify-evenly lg:h-[600px]">
                    <h2 className="text-soft-orange font-bold text-3xl">New</h2>
                    <div className="border-b border-dark-grayish-blue py-8">
                        <h3 className="text-white font-bold mb-2">
                            Hydrogen Vs Electric Cars
                        </h3>
                        <p className="text-dark-grayish-blue font-bold">
                            Will hydrogen-fueled cars ever catch up to EVs?
                        </p>
                    </div>
                    <div className="border-b border-dark-grayish-blue py-8">
                        <h3 className="text-white font-bold mb-2">
                            The Downsides of AI Artistry
                        </h3>
                        <p className="text-dark-grayish-blue font-bold">
                            What are the possible adverse effects of on-demand
                            AI image generation?
                        </p>
                    </div>
                    <div className="py-8">
                        <h3 className="text-white font-bold mb-2">
                            Is VC Funding Drying Up?
                        </h3>
                        <p className="text-dark-grayish-blue font-bold ">
                            Private funding by VC firms is down 50% YOY. We take
                            a look at what that means.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-rows-3 gap-10 md:grid-cols-3 md:grid-rows-none mt-20">
                <div className="grid grid-flow-col gap-4">
                    <div>
                        <img
                            className="h-[140px] w-[100px] lg:h-[180px] lg:w-[140px]"
                            src={retroPc}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-between lg:py-2">
                        <h2 className="font-bold text-grayish-blue text-3xl lg:text-5xl">
                            01
                        </h2>
                        <h3 className="font-extrabold text-very-dark-blue lg:text-xl">
                            Reviving Retro PCs
                        </h3>
                        <p className="text-grayish-blue text-[15px] font-medium lg:text-xl">
                            What happens when old PCs are given modern upgrades?
                        </p>
                    </div>
                </div>
                <div className="grid grid-flow-col gap-4">
                    <div>
                        <img
                            className="h-[140px] w-[100px] lg:h-[180px] lg:w-[140px]"
                            src={laptop}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-between lg:py-2">
                        <h2 className="font-bold text-grayish-blue text-3xl lg:text-5xl">
                            02
                        </h2>
                        <h3 className="font-extrabold text-very-dark-blue lg:text-xl">
                            Top 10 Laptops of 2022
                        </h3>
                        <p className="text-grayish-blue text-[15px] font-medium lg:text-xl">
                            Our best picks for various needs and budgets.
                        </p>
                    </div>
                </div>
                <div className="grid grid-flow-col gap-4">
                    <div>
                        <img
                            className="h-[140px] w-[100px] lg:h-[180px] lg:w-[140px]"
                            src={controller}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-between lg:py-2">
                        <h2 className="font-bold text-grayish-blue text-3xl lg:text-5xl">
                            03
                        </h2>
                        <h3 className="font-extrabold text-very-dark-blue lg:text-xl">
                            The Growth of Gaming
                        </h3>
                        <p className="text-grayish-blue text-[15px] font-medium lg:text-xl">
                            How the pandemic has sparked fresh opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
