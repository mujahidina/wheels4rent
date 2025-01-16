function Car({name, price, image_url}){
    return(

        <div className="">
           <div className="w-96 h-96 mb-8 mr-5 border border-slate-400 rounded-md">
                        <img src={image_url} className="h-[60%] w-full object-cover" alt="car"/>
                        <span className=''>{name}</span>
                        <h1>{price}</h1>
                        <button className="bg-black text-white py-2 px-4"  >BOOK NOW</button>
                        
           </div>
        </div>
    )
}

export default Car;