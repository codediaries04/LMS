import React, {useState,useContext} from 'react'
import { NavLink , useHistory } from 'react-router-dom'
import { UserContext } from '../App';

const Signin = () => {

    const {state, dispatch} = useContext(UserContext);


   const history = useHistory();
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
    
    const signinUser = async(e) =>{
        e.preventDefault();
        
        const res = await fetch("http://localhost:5000/signin", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                email, password
            })
        });

        await res.json();

        if(res.status === 400 || !res){
            window.alert("Invalid Credentials");
            console.log("Invalid Credentials");
        }
        else{
            dispatch({type:"USER",payload: true})
            window.alert("Sign in successfull");
            console.log("Regisration Successfull");

            history.push("/");
        }
    }

  return (
    <section className="signin">
            <div className="container mt-5">
                <div className='signin-content'>
                    <div className='signin-form'>
                        <h2 className='form-title'>Sign in</h2>
                        <form method="POST" className='register-form' id="register-form">
                            <div className='from-group'>
                                <input type="text" name="email" id="email" autoComplete="off" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Your Email'/>
                            </div>
                            <div className='from-group'>
                                <input type="password" name="password" id="password" autoComplete="off" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Your Password'/>
                            </div>
                            
                            <div className='form-group form-button'>
                                <input type="submit" name="signin" id="signin-button" className='form-submit' 
                                value="Sign in"
                                onClick={signinUser}
                                />
                            </div>
                        </form>

                        <div className='signup-link'>
                            <NavLink to="/signup">Create Account</NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </section>
  )
}

export default Signin
