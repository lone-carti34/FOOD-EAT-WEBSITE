// import React from 'react'
import HeroImg from "../../assets/1.png";

const Hero = () => {
    return (
        <div>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]">
                <div className="flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10">
                    <h1 ClassName="text-4xl lg:text-6xl font-semibold">
                        Delious Food Is Waiting For You
                    </h1>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab explicado odio placeat tempora molestiae est sed facilis
                        tempore quam nostrum?
                    </p>
                    <div className="flex gap-4 items-center md:justify-start justify-center">
                        <button className="primary-btn hover:scale-105 during-200">
                            Food Menu
                        </button>
                        <button className="secondary-btn text-black hover:scale-105 during-200">
                            Book Table
                        </button>
                    </div>
                </div>
                {/* Image section */}
                <div className="flex flex-col justify-center">
                    <img
                        src={HeroImg}
                        alt=""
                        className="animate-spin-slow ims-shadow w-[400px] mx-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
