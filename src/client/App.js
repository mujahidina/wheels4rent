// import React from "react";
// import Landing from "./landingPage/Landing";
// import SideNav from "./components/SideNav";
// import Dashboard from "./components/Dashboard";
// import Register from "./components/Register";
// import Login from "./components/Login";


// function App(){
//   return(
//     <div>
//       <Landing/> 
//     </div>
//   )
// }

// export default App;






import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./landingPage/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wrapper" element={<Wrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
