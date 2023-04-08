const Cta = () => {
    return (<div className="w-full p-12">
        <div className="text-center text-dark-green flex justify-center space-x-20">
            <div className="w-[640px] h-[360px] bg-slate-400 rounded-lg animate-pulse"></div>
            <div>
                <h1 className="text-5xl my-8">Let's get you the help you <br /> <span className="text-6xl uppercase">need</span></h1>
                <h2 className="text-3xl my-2">Your nearest hospital</h2>
                <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, fugiat.</p>
                <button className="bg-light-green p-2 rounded-md">Find Hospitals</button>
            </div>
        </div>
    </div> );
}
 
export default Cta;