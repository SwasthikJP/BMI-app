import React from 'react';


function Resultpage(){
return <div>
        <nav>
        <h1>Body Mass Index</h1>
    </nav>
    <div className="result_home">
        <h2>Result</h2>
        <div className="meter">
            <div className="stick"></div>
            <div className="green"></div>
            <div className="blue"></div>
            <div className="orange"></div>
            <div className="red"></div>
        </div>
        <p className="values">Your BMI value is 24</p>
        <p className="values">Height is 1.7m</p>
        <p className="values">Weight is 75kg</p>

        <table>
            <tbody>
            <tr>
                <th>Color</th>
                <th>BMI</th>
                <th>Weight Status</th>
            </tr>
            </tbody>
            <tbody>
            <tr>
                <td><div className="table_div "><div className="gdiv"></div></div></td>
                <td>Below 18.5</td>
                <td>Underweight</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
                <td><div className="table_div "><div className="bdiv"></div></div></td>
                <td>18.5 to 24.9</td>
                <td>Normal</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
                <td><div className="table_div "><div className="odiv"></div></div></td>
                <td>25.5 to 29.9</td>
                <td>Overweight</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
                <td><div className="table_div "><div className="rdiv"></div></div></td>
                <td>30.0 and above</td>
                <td>Obese</td>
            </tr>
            </tbody>
        </table>
    </div>
    </div>
}

export default Resultpage;