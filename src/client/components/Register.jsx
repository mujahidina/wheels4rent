import './register.css'
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate()
    
    return (
       <div className="bodyReg justify-center items-center flex flex-col bg-black h-[100vh] poppins-regular text-white">
           
            <div className="form-container bg-black h-[75%] w-[30%] justify-center items-center  flex flex-col border border-white rounded-lg">
                <form className="form flex flex-wrap w-[60%] ">
                        <h1 className="poppins-semibold text-2xl mb-7">Create Your Account</h1>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control mt-2" id="email" name="email" placeholder="Enter Email" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control mt-2" id="password" name="password"  placeholder="Enter Password" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control mt-2" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                    </div>
                    
 
                    
                    <button type="submit" className="bg-white text-black ml-3 mt-4  px-6 py-3  w-[80%] poppins-semibold" id="register" name="register" >Sign Up</button>
                </form>

                <h1 className='mt-12 text-xs'>Already registered? <span className='text-blue-300 ml-2 mt-11 cursor-pointer text-sm' onClick={() => navigate("/login")}>Login</span></h1>
            </div>
        
       </div>
    );
}

export default Register;
