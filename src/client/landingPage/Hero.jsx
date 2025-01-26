import './Hero.css'

function Hero(){
    return(
        <div className="hero h-[120vh] w-full flex flex-col text-white items-center pt-32 poppins-semibold">
             <h1 className='text-5xl'>Browse Our Wide Range of</h1>
             <h1 className='text-5xl'>Quality Car Rentals</h1>
             <p className='text-slate-400 mt-5'>Unleash Your Journey with Our Fleet</p>
        </div> 
    )
}

export default Hero;