import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink,useHistory } from 'react-router-dom'

const Learn = () => {

    const history = useHistory();
  useEffect(() =>{
    fetch('/learn' ,{
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
          history.push('/learn',{replace:true});
        }
    }).catch((err) => {
        history.push('/signin',{replace:true});
        console.log(err);
    })
});

  // const callAboutPage =async() => {
  //   try{
  //       const res = await fetch('http://localhost:5000/learn',{
  //         method: "GET",
  //         header: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json"
  //         },
  //         credentials: "include"
  //       });

  //       // const data =await res.json();
  //       // console.log(data);
  //       if(!res.status === 200){
  //         const error = new Error(res.error);
  //         throw error;
  //       }

        
        
  //   }
  //   catch(err){
  //       console.log(err);
  //       history.push('/signin');
  //   }
  // }

  // useEffect(() => {
  //   callAboutPage();
  // },[]);


  return (
    <div className='container'>
      <form method="GET">
      <div className='row'>
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
          <NavLink to="#">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Credit Score: 3</div>
              <div className="card-body">
                <h5 className="card-title">Object Oriented Programming</h5>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
          <NavLink to="#">
            <div className="card text-white bg-warning mb-3">
              <div className="card-header">Credit Score: 2</div>
              <div className="card-body">
                <h5 className="card-title">DataBase Management</h5>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
          <NavLink to="#">
            <div className="card text-white bg-success mb-3">
              <div className="card-header">Credit Score: 3</div>
              <div className="card-body">
                <h5 className="card-title">Data Structure and Algorithm</h5>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
          <NavLink to="#">
            <div className="card text-white bg-danger mb-3">
              <div className="card-header">Credit Score: 2</div>
              <div className="card-body">
                <h5 className="card-title">Design of Operating Systems</h5>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Learn
