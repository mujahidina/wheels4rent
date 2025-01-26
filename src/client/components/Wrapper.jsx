// import SideNav from "./SideNav";
// import Dashboard from "./Dashboard";

// function Wrapper() {
//     return(
//         <div className="flex flex-row poppins-regular">
//             <SideNav/>
//             <Dashboard/>
//         </div>
//     )
// }

// export default Wrapper;



import React from "react";
import SideNav from "./SideNav";
import Dashboard from "./Dashboard";

function Wrapper() {
  return (
    <div className="flex flex-row poppins-regular">
      <SideNav />
      <Dashboard />
    </div>
  );
}

export default Wrapper;
