const Hero = () => {
    return ( 
    <div className="w-full">
        {/* Hero Start! */}
        <div className="w-full bg-dark-green h-[550px] flex flex-col">
            {/* Navbar Start! */}
            <div className="w-full flex px-8 py-6 text-light-green items-center">
                <h1 className="text-3xl">Self Care.ng</h1>

                <ul className="flex ml-auto mr-8 space-x-4">
                    <li><a>Home</a></li>
                    <li><a>Link</a></li>
                    <li><a>Link</a></li>
                    <li><a>Link</a></li>
                </ul>

                <div className="flex space-x-4 text-dark-green">
                    <button className="rounded-lg bg-deep-cream p-2">Book an appointment</button>
                    <button className="rounded-lg bg-deep-cream p-2">Log In/Sign Up</button>
                </div>
            </div>
            {/* Navbar end! */}

            <div className="flex h-full flex flex-col justify-center">
                <div className="text-light-green max-w-[720px] text-center mx-auto">
                    <h1 className="text-8xl" >Let's find the best care for 
                    <br /><span className="uppercase text-9xl text-deep-cream">you</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id voluptates amet commodi quam nesciunt, enim reprehenderit sit aperiam optio ea.</p>
                    <div className="flex space-x-4 px-4 text-dark-green justify-center my-4">
                        <button className="rounded-lg bg-light-green p-2">Nearby Clinics</button>
                        <button className="rounded-lg bg-light-green p-2">Sign Up</button>
                    </div>    
                </div>

            </div>
        </div>
        {/* Hero end! */}

        <div className="py-8 text-dark-green flex flex-col text-center items-center">
            <div className="max-w-[540px] my-4">
                <h1 className="text-5xl">Why we are the best from others</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, temporibus.
                     Cumque neque facere dolores quo expedita. Qui eaque aliquam similique.</p>
            </div>
            <div className="flex space-x-10">
                {/* Hospital Stats start! */}
                <div>
                    <div className="h-44 w-44 bg-red rounded-xl flex">
                        <p className="text-6xl m-auto">2k+</p>
                    </div>
                    <p>Active users</p>
                </div>

                <div>
                    <div className="h-44 w-44 bg-light-green rounded-xl flex">
                        <p className="text-6xl m-auto">30k+</p>
                    </div>
                    <p>Appointments made</p>
                </div>

                <div>
                    <div className="h-44 w-44 bg-light-blue rounded-xl flex">
                        <p className="text-6xl m-auto">100%</p>
                    </div>
                    <p>Patient Satisfaction</p>
                </div>
                {/* Hospital Stats end! */} 
            </div>
        </div>
    </div> );
}
 
export default Hero;