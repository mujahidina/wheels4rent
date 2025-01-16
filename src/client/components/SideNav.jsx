import { NavLink } from 'react-router-dom'
import './sidenav.css'
import { IoHomeOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { LiaQuestionSolid } from "react-icons/lia";
import { LiaToolsSolid } from "react-icons/lia";



function SideNav(){
    



    return(
        <div className="sidenav bg-black h-[100vh] w-[15%] text-white fixed">
            {/*logo*/}
            <div className="logo">
            </div>



            {/*menu navigation*/}
            <div className="menu items-center my-auto justify-center flex flex-col poppins-medium ">
                <div className="menu-item mt-48 flex flex-row p-1">
                    <div className='mr-3 pt-1'>
                     <IoHomeOutline />
                    </div>
                    <NavLink className="nav-link" to='/admin'>Book</NavLink>  
                </div>




                <div className="menu-item flex flex-row p-1">
                    <div className='mr-3 pt-1'>
                    <IoIosTimer />
                    </div>
                    <NavLink className="nav-link" to='/admin'>Rentals</NavLink>  
                </div>




                <div className="menu-item flex flex-row p-1">
                    <div className='mr-3 pt-1'>
                    <FaCar />
                    </div>
                    <NavLink className="nav-link" to='/admin'>My Cars</NavLink>  
                </div>



                <div className="menu-item flex flex-row p-1">
                    <div className='mr-3 pt-1'>
                      <LiaQuestionSolid />
                    </div>
                    <NavLink className="nav-link" to='/admin'>FAQs</NavLink>  
                </div>



                <div className="menu-item flex flex-row p-1">
                    <div className='mr-3 pt-1'>
                    <LiaToolsSolid />

                    </div>
                    <NavLink className="nav-link" to='/admin'>Support</NavLink>  
                </div>


            </div>
        </div>
    )
}

export default SideNav;