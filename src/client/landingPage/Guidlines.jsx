// function Guidlines(){
//     return(
//         <div className="flex flex-col h-[100vh] items-center">
//             <h1>How it works</h1>
//             <p>Renting a luxury car has never been easier. Our streamlined process makes it simple for you</p>
//             <p>to book and confirm your vehicle of choice online</p>
             
//                            {/* big div */}
//             <div className="bg-blue-100 w-[70%] h-[90%] flex flex-row">
//                           {/* left div */}
//                   <div className="burka w-[50%] h-[90%] flex flex-col mt-8 gap-7">
//                         <div className="bg-blue-300 w-[100%] h-[30%] rounded-md">
                         
//                         </div>

//                         <div className="bg-blue-300 w-[100%] h-[30%] rounded-md">

//                         </div>


//                         <div className="bg-blue-300 w-[100%] h-[30%] rounded-md">

//                         </div>
//                   </div>


                   
//                    {/* right div */}
//                    <div  className="bosha bg-slate-300 w-[80%] ">

//                    </div>
//             </div>

//         </div>
//     )
// }

// export default Guidlines;













function Guidelines() {
    return (
      <div className="flex flex-col h-[100vh] items-center my-36 poppins-medium">
        <h1 className="text-5xl mb-8">How it works</h1>
        <p className="text-lg">Renting a luxury car has never been easier. Our streamlined process makes it simple for you</p>
        <p className="mb-16 text-lg">to book and confirm your vehicle of choice online</p>
  
        {/* big div */}
        <div className="relative w-[70%] h-[90%] flex flex-row">
          {/* left div */}
          <div className="burka absolute w-[50%] h-[90%] flex flex-col mt-8 gap-7 z-10" style={{ left: "0", top: "0" }}>


            <div className="bg-white w-[100%] h-[30%] rounded-3xl border border-slate-300 flex flex-col items-center pt-10">
                <h1 className="poppins-medium text-xl">Browse and select</h1>
                <p className="poppins-regular text-sm">Choose from our wide range of premium cars, select the</p>
                <p className="poppins-regular text-sm">pickup and return dates and locations that suit you best.</p>
            </div>




            <div className="bg-white w-[100%] h-[30%] rounded-3xl border border-slate-300 flex flex-col items-center pt-10">
                <h1 className="poppins-medium text-xl">Browse and select</h1>
                <p className="poppins-regular text-sm">Choose from our wide range of premium cars, select the</p>
                <p className="poppins-regular text-sm">pickup and return dates and locations that suit you best.</p>
            </div>





            <div className="bg-white w-[100%] h-[30%] rounded-3xl border border-slate-300 flex flex-col items-center pt-10">
                <h1 className="poppins-medium text-xl">Browse and select</h1>
                <p className="poppins-regular text-sm">Choose from our wide range of premium cars, select the</p>
                <p className="poppins-regular text-sm">pickup and return dates and locations that suit you best.</p>
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
  