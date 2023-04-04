import img from '../../assets/black-female-doctor.png'

const Hero = () => {
    return ( 
    <div className="w-full">
        {/* Hero Start! */}
        <div className="w-full bg-dark-green h-[550px] overflow-hidden flex flex-col">
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

            <div className="flex h-full px-12 w-full space-x-8 justify-center">
                <div className="text-light-green max-w-[640px] text-center">
                    <h1 className="text-7xl pt-12" >Let's find the best care for 
                    <br /><span className="uppercase text-8xl text-deep-cream">you</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id voluptates amet commodi quam nesciunt, enim reprehenderit sit aperiam optio ea.</p>
                    <div className="flex space-x-4 px-4 text-dark-green justify-center my-4">
                        <button className="rounded-lg bg-light-green p-2">Nearby Clinics</button>
                        <button className="rounded-lg bg-light-green p-2">Sign Up</button>
                    </div>    
                </div>

                <div>
                     <img src={img} className="h-full"/>
                </div>
            </div>
        </div>
        {/* Hero end! */}
    </div> );
}
 
export default Hero;