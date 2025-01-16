function Services(){

    return(
        <div className="bg-black h-[85vh] flex flex-col text-white items-center poppins-medium py-8">
           {/* <h1 className="text-5xl mt-16 mb-3">Our Services & Benefits</h1>
           <p>To make renting easy and hassle-free, we provide a variety of services and advantages. We </p>
           <p>have you covered with a variety of vehicles and flexible rental terms.</p> */}

<h1 className="text-5xl mt-16 mb-3">Why Choose Us?</h1>
<p>
  Renting a car has never been this simple. We offer a diverse fleet of vehicles and flexible rental plans 
  designed to suit your needs.
</p>

          <div className="flex flex-row h-[60%] w-[85%] gap-5 mt-14 items-center justify-center "> 

             <div className="w-[23%] h-[80%] my-auto flex flex-col items-center pt-8 border  border-white rounded-2xl poppins-regular text-gray-300">
              <img src="icon4.png" alt=""  className="w-18 h-18 object-cover mb-8"/>
               <h1 className="text-xl poppins-semibold mb-4">Premium Selection</h1>
               <p className="text-sm" >Discover an extensive collection of top-tier vehicles tailored to </p>
               <p className="text-sm"> meet your needs, including luxury</p>
               <p className="text-sm">cars, spacious SUVs, versatile vans, and much more.</p>
             </div>


             <div className="w-[23%] h-[80%] my-auto flex flex-col items-center pt-8 border  border-white rounded-2xl poppins-regular text-gray-300">
              <img src="icon5.png" alt=""  className="w-18 h-18 object-cover mb-8"/>
               <h1 className="text-xl poppins-semibold mb-4">Effortless Rentals</h1>
               <p className="text-sm" >Experience a seamless car rental process designed for your convenience, from quick bookings to hassle-free returns. Renting has never been this easy!</p>
               <p className="text-sm"> </p>
               <p className="text-sm"></p>
             </div>


             <div className="w-[23%] h-[80%] my-auto flex flex-col items-center pt-8 border  border-white rounded-2xl poppins-regular text-gray-300">
              <img src="icon6.png" alt=""  className="w-18 h-18 object-cover mb-8"/>
               <h1 className="text-xl poppins-semibold mb-4">Affordable Excellence</h1>
               <p className="text-sm" >Enjoy competitive pricing without compromising on quality. We offer transparent rates and flexible options to suit every budget </p>
               <p className="text-sm">  </p>
               <p className="text-sm"></p>
             </div>

            
            
             
          </div>
     



       </div>
    )
}

export default Services;