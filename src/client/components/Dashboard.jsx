 import { Routes, Route } from "react-router-dom";
import Rent from "./Rent";
import MyCars from "./MyCars";
import FAQs from "./FAQs";
import Support from "./Support";
import Rentals from "./Rentals";


function Dashboard(){
    
    const userEmail = sessionStorage.getItem('userEmail')
    // console.log("your email", userEmail);
    
    return(
        <div className="h-[100vh] w-[85%] right-0 absolute">
            {/* top */}
            <div className=" h-[8vh] w-full flex flex-row justify-between bg-black border-b text-white border-slate-400  pt-4 poppins-regular">
               <h1 className="ml-16">Wheels4Rent</h1>
               <h1 className="mr-16">{userEmail}</h1>
            </div>

            <div>
             <Routes>
              <Route path="/book" element={  <Rent/> } />
              <Route path="/rentals" element={ <Rentals/> } />
              <Route path="/my-cars" element={<MyCars />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/support" element={<Support />} />
             </Routes>
            </div>


        </div>

    )
}

export default Dashboard;















// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Rent from "./Rent";
// import MyCars from "./MyCars";
// import FAQs from "./FAQs";
// import Support from "./Support";

// function Dashboard() {
//   return (
//     <div className="h-[100vh] w-[85%] right-0 absolute">
//       {/* Top Header */}
//       <div className="h-[8vh] w-full flex flex-row justify-between bg-black border-b text-white border-slate-400 pt-4">
//         <h1 className="ml-16">Wheels4Rent</h1>
//         <h1 className="mr-16">Mujahid</h1>
//       </div>

//       {/* Main Content (Nested Routes) */}
//       <div className="p-8">
//         <Routes>
//           <Route path="/book" element={<h1>Book Section</h1>} />
//           <Route path="/rentals" element={<Rent />} />
//           <Route path="/my-cars" element={<MyCars />} />
//           <Route path="/faqs" element={<FAQs />} />
//           <Route path="/support" element={<Support />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
