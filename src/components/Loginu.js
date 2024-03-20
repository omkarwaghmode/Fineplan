import React,{useState} from 'react'
import './css/Loginu.css';
import { useNavigate } from "react-router-dom";


// import home  from './Home.js';
function Loginu() {
  // const age = 0; 
  const child = 0;
  const amt = 0;
  const [age,age1]=useState(null);

  // const Filtering =(text)=>{
  //   if(text > 35){ 
  //   let newlink = "/Home";
  //   settext1(newlink);
  //   <a href='/Card'></a>
  //   console.log("Clicked");
  //   }
  //   else{
  //     console.log("Clicked");
  //     <a  href='/Home'> </a>
  //   }
  // }
  function getData(event){
    age1(event.target.value)
    console.warn(event.target.value)

  }
  let navigate = useNavigate();
  const Filtering = (event) =>{ 
    if(age  > 21 && age < 44){
      let path = `Home1`; 
        navigate(path);
      console.log("Clicked");
      console.log(age);
    }
   else if(age >= 45 && age <59){
    let path = `Home2`; 
    navigate(path);
  console.log("Clicked");
    }
    else if(age >= 60 && age <80  ){
      let path = `Homec`; 
      navigate(path);
    console.log("Clicked");
    }
    else {
      let path = `Home`; 
      navigate(path);
    console.log("Clicked");
    console.log(age);
    }

  }
  return (
    <>
    
    <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p> Get the true help !</p>
           <br />
          </div>
          <div className="col-md-9 register-right">
            <ul className="nav nav-tabs " id="myTab" role="tablist">
             
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h3 className="register-heading">A Complete Guide For Mutual Fund Selection!</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="First Name *" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Last Name *"  />
                    </div>
                    <div className="maxl  m-1">
                        <label className="radio inline"> 
                          <input type="radio" name="Maritial Status" defaultValue="Married"  />
                          <span>Married </span> 
                        </label>
                        <label className="radio inline p-2"> 
                          <input type="radio" name="Maritial Status" defaultChecked />
                          <span>Unmarried </span> 
                        </label>
                      </div>

                    <div className="form-group">
                      <div className="maxl  m-3">
                        <label className="radio inline"> 
                          <input type="radio" name="gender" defaultValue="male" defaultChecked />
                          <span> Male </span> 
                        </label>
                        <label className="radio inline"> 
                          <input type="radio" name="gender" defaultValue="female" />
                          <span>Female </span> 
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group1">
                      <input type="text" className="form-control"  onChange={getData} placeholder=" Age (in Years)*"  />
                    
                    </div>
                    <div className="form-group">
                      <input type="text" minLength={10} maxLength={10} name="txtEmpPhone" className="form-control" 
                      onChange={getData}  placeholder="Amount You Can Invest*"  />
                    </div>
                    <div className="form-group">
                      <select className="form-control">
                        <option className="hidden" selected disabled>If Married Select Below options</option>
                        <option>Number of Childrens</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input type={child} className="form-control" placeholder="Enter Your Answer *"  />
                    </div>
                    {/* <button onclick={Filtering} >Click me</button> */}
                     {/* <button type="button" onClick={Filtering} class="btn-primary"   >Link</button> */}
                    {/* <input type="submit" className="btnRegister" link to="/Home" defaultValue="Register" />
     */}
    
                  </div>
                  <button type="button"  onClick={Filtering} class="btn btn-primary " >Get Funds</button>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
      </>
  )
}

export default Loginu