function Services(){

    return(
        <div className="bg-black h-[80vh] flex flex-col text-white items-center poppins-medium py-8">
           <h1 className="text-5xl mt-16 mb-3">Why Choose Us?</h1>
           <div className="w-[45%] flex flex-col items-center text-gray-300">
               <p>Renting a car has never been this simple. We offer a diverse fleet of vehicles and flexible </p>
               <p>rental plans designed to suit your needs.</p>
            </div>

          <div className="flex flex-row h-[60%] w-[85%] gap-5 mt-2 items-center justify-center "> 

             <div className="w-[28%] h-[80%] my-auto flex flex-col items-center pt-8 poppins-regular text-gray-300">
              <img src="icon4.png" alt=""  className="w-18 h-18 object-cover mb-8"/>
               <h1 className="text-xl poppins-semibold mb-4">Premium Selection</h1>
               <p className="text-sm" >Discover an extensive collection of top-tier vehicles</p>
               <p className="text-sm">tailored to meet your needs, including luxury</p>
               <p className="text-sm">cars, spacious SUVs and much more.</p>
             </div>


             <div className="w-[27%] h-[80%] my-auto flex flex-col items-center pt-8 poppins-regular text-gray-300">
              <img src="icon5.png" alt=""  className="w-18 h-18 object-cover mb-8"/>
               <h1 className="text-xl poppins-semibold mb-4">Effortless Rentals</h1>
               <p className="text-sm" >Experience a seamless car rental process </p>
               <p className="text-sm">designed for your convenience, from quick  </p>
               <p className="text-sm">bookings to hassle-free returns. Renting </p>
               <p className="text-sm">has never been this easy!</p>
             </div>


             <div className="w-[27%] h-[80%] my-auto flex flex-col items-center pt-8  poppins-regular text-gray-300">
              <img src="icon6.png" alt=""  className="w-18 h-18 object-cover mb-8"/>
               <h1 className="text-xl poppins-semibold mb-4">Affordable Excellence</h1>
               <p className="text-sm" >Enjoy competitive pricing without compromising on  </p>
               <p className="text-sm">quality. We offer transparent rates and flexible   </p>
               <p className="text-sm">options to suit every budget</p>
             </div>

            
            
             
          </div>
     



       </div>
    )
}

export default Services;