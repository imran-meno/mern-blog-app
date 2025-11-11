
import { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom';
function SignUp(){

    const [username,setUserName]=useState('')
    const [password,SetPassword]=useState('')
    const[email,SetEmail]=useState('')
    const navigate= useNavigate()

    const handleSubmit = async (e) => {
           e.preventDefault()
         await axios
  .post("http://localhost:3000/signup", {username, email, password })
  .then((result) => console.log(result))
  navigate('/login')
  .catch((err)=>{console.log(err)});
};



    return(
        <div className="SignUP_main">
            <div className="SignUp_inputs">
              <div className='main_signup'>

             
            <h1>Create Your Account</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter Youe Userame" required
                    
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                   
                    />
                    <input type="text" placeholder= "Enter Your Email" required
                    
                    value={email}
                    onChange={(e) => SetEmail(e.target.value)} />
                    <input type="password" placeholder="Enter Your Password" required 
                   
                    value={password}
                      onChange={(e) => SetPassword(e.target.value)}
                    />
                   
                    <button type="submit" >Signup</button>
                </form>
                <p>Already have account? <Link to='/login'>login</Link></p>
            </div>

           </div>
        </div>
    )
}
export default SignUp;