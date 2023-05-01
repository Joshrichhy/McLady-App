
import CircleCalculator from "./CircleCalculator";
import React from "react";
import {useState} from "react";
function CircleResult(){

    const [searchValue, setSearchValue] = useState("")


    function valuesOFInput(event){
        setSearchValue(event.target.value)
    }

    return(
        <div>
            <input id = "inputField" onChange={valuesOFInput}/>
            {searchValue}
            HELLO</div>
    )
}
export default CircleResult