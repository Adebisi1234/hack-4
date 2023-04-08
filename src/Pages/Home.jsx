import Hero from "../components/landing/Hero"
import Cta from "../components/landing/Cta"
function Home(){

	return(<div>
		<Hero />
		<div className="py-8 text-dark-green flex flex-col text-center items-center h-[540px]">
            <div className="max-w-[540px] my-4">
                <h1 className="text-5xl">Why we are the best from others</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, temporibus.
                     CumTextque neque facere dolores quo expedita. Qui eaque aliquam similique.</p>
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
        <Cta />
        <div className="w-full bg-dark-green p-8 flex text-white justify-between">
            <div>
                <h1 className="text-5xl">Selfcare.ng</h1>
                <p>Your Online Medical Care Platform</p>
            </div>
            <div className="flex space-x-10">
                <ul>
                    <li className="my-2">Text</li>
                    <li className="my-2">Text</li>
                    <li className="my-2">Text</li>
                    <li className="my-2">Text</li>
                </ul>
                <ul>
                    <li className="my-2">Text</li>
                    <li className="my-2">Text</li>
                    <li className="my-2">Text</li>
                    <li className="my-2">Text</li>
                </ul>
                <ul>
                    <li className="my-2">Text</li>
                    <li className="my-2">Text</li>
                    <li className="my-2">Text</li>
                    <li className="my-2">Text</li>
                </ul>
                <ul>
                    <li className="my-2">Text</li>
                    <li className="my-2">Text</li>
                    <li className="my-2">Text</li>
                    <li className="my-2">Text</li>
                </ul>
            </div>
        </div>
	</div>)
}

export default Home