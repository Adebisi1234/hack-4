import Hero from "../components/landing/Hero"
function Home(){

	return(<div>
		<Hero />
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
	</div>)
}

export default Home