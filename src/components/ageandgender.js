import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Ageandgenderpage(){
return <div>
        <nav>
        <h1>Body Mass Index</h1>
    </nav>
    <div className="home age_home">
        <form action="">
            <label for="age">Enter the age</label>
            <input type="text" id="age" class="otpinput"/>
            <label for="gender">Enter the gender</label>
           
            <select id="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
                </select>
            {/* <input type="submit" class="submit_but"/> */}
            <Link to="/result" className="submit_but ">Submit</Link>
        </form>
        
    </div>
    </div>
}

export default Ageandgenderpage;