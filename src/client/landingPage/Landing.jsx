import Navbar from "./Navbar"
import Hero from "./Hero"
import Guidlines from "./Guidlines";
import Services from "./Services";
import Footer from "./Footer";


function Landing(){
    return (
        <div className="landing">
           <Navbar/>
           <Hero/>
           <Guidlines/>
           <Services/>
           <Footer/>
        </div>
    )
}
export default Landing;