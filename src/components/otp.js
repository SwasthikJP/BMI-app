import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


//   const fun=()=>{
    
//   }

function Otppage(){
return <div>
        <nav>
        <h1>Body Mass Index</h1>
    </nav>
    <div className="home">
        <form action="" >
            <label for="otp">Enter the OTP</label>
            <input type="text" id="otp" className="otpinput"/>
            {/* <input type="submit" class="submit_but"/> */}
            <Link to="/info" className="submit_but ">Submit</Link>
        </form>
    </div>
    </div>
}

export default Otppage;