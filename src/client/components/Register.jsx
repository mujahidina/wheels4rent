import { useState } from 'react';
import './register.css'
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleName = (e) =>{
        setName(e.target.value);
    }

    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }

    const handlePaswword = (e)=>{
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const opts = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            password
          })
        };
    
        fetch('http://127.0.0.1:5000/user/register', opts)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              alert('Failed to create account');
              throw new Error('Failed to create account');
            }
          })
          .then((data) => {
            console.log(data);
            alert('Account Created');
            navigate('/login');
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };



    
    return (
       <div className="bodyReg justify-center items-center flex flex-col bg-black h-[100vh] poppins-regular text-white">
           
            <div className="form-container bg-black h-[75%] w-[30%] justify-center items-center  flex flex-col border border-white rounded-lg">
                <form className="form flex flex-wrap w-[60%] " onSubmit={handleSubmit}>
                        <h1 className="poppins-semibold text-2xl mb-7">Create Your Account</h1>

                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" className="form-control mt-2" value={name} placeholder="name" onChange={handleName} />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control mt-2" value={email} placeholder="email" onChange={handleEmail}/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control mt-2"  value={password} placeholder="Password" onChange={handlePaswword}/>
                    </div>
                    
 
                    
                    <button type="submit" className="bg-white text-black ml-3 mt-4  px-6 py-3  w-[80%] poppins-semibold" id="register" name="register" >Sign Up</button>
                </form>

                <h1 className='mt-12 text-xs'>Already registered? <span className='text-blue-300 ml-2 mt-11 cursor-pointer text-sm' onClick={() => navigate("/login")}>Login</span></h1>
            </div>
        
       </div>
    );
}

export default Register;
