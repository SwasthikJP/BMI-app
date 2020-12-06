import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Otppage from './otp'

function Getstarted() {

// const routefun=()=>{
//  return <Redirect to="/Otpage" />
// }

    return <div>
        <nav>
            <h1 className="heading">Body Mass Index</h1>
        </nav>
        {/* <img src="./images/bmi1.png" alt=""/> */}
        <div className="Home getstarteddiv">
            <div className="getdiv">
                <p className="para">BMI stands for body mass index. It is the <br /> value derived from the mass(weight) and <br /> the height of the person . It is calculated as <br /> the body mass divided by the square of <br /> the body height.
                <p className='para'>Get started to know your BMI !  </p>
                </p>
                

                {/* <button className="submit_but getstarted_but" onClick={routefun}>Get Started</button> */}
                <Link to="/otp" className="submit_but getstarted_but">Get Started</Link>
            </div>
        </div>


    </div>
}

export default Getstarted;