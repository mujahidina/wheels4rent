function Footer(){
    return(
       <div className="bg-white h-[38vh] flex flex-col">
             {/* top */}
             <div className="h-[100%] w-[100%] flex flex-row mb-7">
                {/* top-left */}
                {/* <div className="w-[35%] h-[100%] ml-36 justify-center flex flex-col ">
                  <h1 className="poppins-semibold text-3xl mb-3">Download Our Mobile App</h1>
                  <p className="poppins-regular">Get exclusive access to car rentals with our mobile app. Download</p>
                  <p className="poppins-regular">now and experience convenience on the go.</p>
                  <p className="poppins-semibold mt-12">All Rights Reserved &copy; Mujahid Abdi 2024</p>
                </div> */}

<div className="w-[35%] h-[100%] ml-36 justify-center flex flex-col">
  <h1 className="poppins-semibold text-3xl mb-3">Get Our App Today</h1>
  <p className="poppins-regular">
    Unlock exclusive deals and streamline your car rental experience with our mobile app. 
  </p>
  <p className="poppins-regular">
    Download now and enjoy the freedom to book anytime, anywhere.
  </p>
  <p className="poppins-semibold mt-12">
    &copy; 2024 Mujahid Abdi. All Rights Reserved.
  </p>
</div>


                 {/* top-right */}
                 <div className=" w-[55%] h-[100%] flex -flex-row">
                     <img src="bg02.png" alt="" className="mr-10 w-[55%] object-cover "/>

                     <div className="h-[100%] w-[70%] justify-center items-center flex flex-col pr-14">
                       <img src="playstore.svg" alt="download-android" className="w-15 h-10 object-cover mb-4"/>
                       <img src="appstore.svg" alt="download-apple" className="w-15 h-10 object-cover "/>

                    </div>

                 </div>

             </div>

       </div>
    )
}

export default Footer;