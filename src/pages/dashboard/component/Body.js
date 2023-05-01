import React from "react";
import '../styles/Body.css'
import {useNavigate} from "react-router-dom";

function Body(){
    const Navigate = useNavigate()

    return(
        <div>

        <div className="main">
            <li>
                <span>
                    Did You Know? <br/>
            As horrible and Painful that Period is... <br/> It is a beautiful thing, <br/>
            because when missed on purpose, you are good to be a mother else Kasala don burst

                </span>
            </li>
        </div>
        <div className="calculate">
            <div >Calculate Your dripping Circle</div>
            <button onClick={()=>{Navigate('/circleCalculation')}}>Ok</button>

        </div>
        </div>
    )
}
export default Body