function Guidelines() {
    return (
      <div className="flex flex-col h-[100vh] items-center my-36 poppins-medium">
        <h1 className="text-5xl mb-8">How it works</h1>
        <p className="text-lg">Renting a high-end car is now quicker and easier than ever. Our straightforward </p>
        <p className="mb-16 text-lg">process ensures a smooth experience.</p>
  
        {/* big div */}
        <div className="relative w-[70%] h-[90%] flex flex-row">
          {/* left div */}
          <div className="burka absolute w-[50%] h-[90%] flex flex-col mt-8 gap-7 z-10" style={{ left: "0", top: "0" }}>


            <div className="bg-white w-[100%] h-[30%] rounded-3xl border border-slate-300 flex flex-col items-center pt-10">
                <h1 className="poppins-medium text-xl">Browse and select</h1>
                <p className="poppins-regular text-sm text-gray-500">Choose from our wide range of premium cars, select the</p>
                <p className="poppins-regular text-sm text-gray-500">pickup and return dates and locations that suit you best.</p>
            </div>




            <div className="bg-white w-[100%] h-[30%] rounded-3xl border border-slate-300 flex flex-col items-center pt-10">
                <h1 className="poppins-medium text-xl">Secure Your Reservation</h1>
                <p className="poppins-regular text-sm text-gray-500">Once you've found your perfect car, simply select  </p>
                <p className="poppins-regular text-sm text-gray-500">your pickup and return dates, and choose your preferred location.</p>
            </div>





            <div className="bg-white w-[100%] h-[30%] rounded-3xl border border-slate-300 flex flex-col items-center pt-10">
                <h1 className="poppins-medium text-xl">Rent Out Your Car</h1>
                <p className="poppins-regular text-sm text-gray-500">Earn extra income by listing your vehicle </p>
                <p className="poppins-regular text-sm text-gray-500">on our platform. It's easy to post and manage your car rental.</p>
            </div>
          </div>    






               
          {/* right div */}
          <div className="bosha bg-gray-100 w-[80%] z-0 ml-96 rounded-lg  items-center flex">
                 <div className="w-[65%] h-[75%] ml-48 pt-16">
                      <img src="car3.png" alt="car" className="object-cover mt-10"/>
                 </div>
            </div>
        </div>
      </div>
    );
  }  
  
  export default Guidelines;
  