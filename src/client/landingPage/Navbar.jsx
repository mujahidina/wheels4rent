
import { useNavigate } from "react-router-dom";

function Navbar(){

  const navigate = useNavigate()
    return (
       <div className=" bg-black h-[10vh] flex flex-row text-white justify-around poppins-medium">
         <p className="my-auto">Logo</p>
         <p className="my-auto">Wheels4Rent</p>
         <button onClick={() => navigate('/register')} className='px-3 xs-lg my-auto py-1 text-white border border-white rounded-lg'>Get Started</button>

       </div>
    )
}

export default Navbar;






