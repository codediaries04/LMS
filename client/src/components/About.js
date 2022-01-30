import React,{ useEffect } from 'react'
import {useHistory } from 'react-router-dom'

const About = () => {
  const history = useHistory();
  useEffect(() =>{
    fetch('/about' ,{
        method: "GET",
        header: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include"
    }).then((res) => {
        if(res.status !== 200){
            const error =new Error(res.error);
            throw error;
        }
        else{
          history.push('/about',{replace:true});
        }
    }).catch((err) => {
        history.push('/signin',{replace:true});
        console.log(err);
    })
});
  return (
    <div>
      <h1 className='about-title'>You can find all your courses here</h1>
    </div>
  )
}

export default About
