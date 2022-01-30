import React, {useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom'

const Signup = () => {

    const history = useHistory();
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    });

    let name, value; 

    const handleInputs = (e) => {
        console.log(e);
        console.log("Here");
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {name, email, password, reEnterPassword } = user;

        const res = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name, email, password, reEnterPassword
            })
        });
        
        await res.json();

        if(res.status === 422 || !res){
            window.alert("Invalid Registration");
            console.log("Invalid Regisration");
        }
        else{
            window.alert("Registration Successfull");
            console.log("Regisration Successfull");

            history.push("/signin");
        }

    }

  return (
    <>
        <section className="signup">
            <div className="container mt-5">
                <div className='signup-content'>
                    <div className='signup-form'>
                        <h2 className='form-title'>Sign up</h2>
                        <form method="POST" className='register-form' id="register-form">
                            <div className='from-group'>
                                <input type="text" name="name" id="name" autoComplete="off"
                                    value={user.name}
                                    onChange={handleInputs}
                                    placeholder='Your Name'
                                />
                            </div>
                            <div className='from-group'>
                                <input type="text" name="email" id="email" autoComplete="off" 
                                    value={user.email}
                                    onChange={handleInputs}
                                    placeholder='Your Email'
                                />
                            </div>
                            <div className='from-group'>
                                <input type="password" name="password" id="password" autoComplete="off" 
                                    value={user.password}
                                    onChange={handleInputs}
                                    placeholder='Your Password'
                                />
                            </div>
                            <div className='from-group'>
                                <input type="password" name="reEnterPassword" id="reEnterPassword" autoComplete="off" 
                                    value={user.reEnterPassword}
                                    onChange={handleInputs}
                                    placeholder='Re-enter Your Password'
                                />
                            </div>

                            <div className='form-group form-button'>
                                <input type="submit" name="signup" id="signup-button" className='form-submit' 
                                    value="Sign up" onClick={PostData}
                                />
                            </div>
                        </form>

                        <div className='signin-link'>
                            <NavLink to="/signin">Already registered?</NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Signup
