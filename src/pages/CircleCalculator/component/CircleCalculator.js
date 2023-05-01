import React from "react";
import {useState} from "react";
import '../styles/CircleCalculator.css'
import Moment from "react-moment";
import {useNavigate} from "react-router-dom";
function CircleCalculator(){

    const Navigate = useNavigate()

    const [StartDateOfMenstrualCycle, setStartDateOfMenstrualCycle] = useState(new Date());
    const [OvulationPeriodBegins, setOvulationPeriodBegins] = useState(new Date());
    const [OvulationPeriodEnds, setOvulationPeriodEnds] = useState(new Date());
    const [SafePeriods, setSafePeriods] = useState(" ");
    const [NextMenstrualDate, setNextMenstrualDate] = useState(new Date());


    function nextExpectedDate(event){
        if(event.target.id == "submitButton"){

            let currentMenstrualDate = document.getElementById("calender").value
            let menstrualCycle = document.getElementById("duration").value
            let newc = new Date(currentMenstrualDate)
            newc.setDate(newc.getDate() + parseInt(menstrualCycle))
            setNextMenstrualDate(newc)




            let peakOvulation = parseInt(menstrualCycle)/2
            let startOvulation = new Date(currentMenstrualDate)
            startOvulation.setDate(startOvulation.getDate() + (peakOvulation - 1))
            setOvulationPeriodBegins(startOvulation)

            let endOvulation = new Date(currentMenstrualDate)
            endOvulation.setDate(endOvulation.getDate() + (peakOvulation + 1))
            setOvulationPeriodEnds(endOvulation)
            setSafePeriods("Thanks")


            let b = document.getElementById("nextDate")
            let c = document.getElementById("ovulationPeriod")
            let d = document.getElementById("safePeriod")
            b.innerText = "Your Next Expected Dripping Date is "  + NextMenstrualDate.toDateString();

            c.innerText =  "Babe, Your Ovulation or should i say your most fertile days Begins on::  " + OvulationPeriodBegins.toDateString()
                 + " and ends " + OvulationPeriodEnds.toDateString()

            d.innerText = "Guess What Sweet, the other days aside the dripping and Ovulation is so safe for you, but be guided o"

        }


    }

    const displayResult = SafePeriods !== " ";
    const pageResult = ()=>{
        if (1 +1 === 3){
            return Navigate('/CircleResult')
        }
        else if(2*2 === 4){
            return Navigate('/CircleResultTwo')
        }
    }


    function reloadPage(){

        window.location.reload();

    }

    return(
        <div className="MainOne">
            <button onClick={()=>{Navigate('/home')}} >Back</button>
            <div className="MainTwo"> </div>

            <div className= "QAndABlock">
                <div className="mainC">
                    <p>Enter Your <span>Dripping</span> Date</p>
                    <input id = "calender" type= "date"/>

                    <p>Enter Circle Duration</p>
                    <input id= "duration" type= "number"/>

                    <p>I know right, but how many days do you drip?</p>
                    <input type= "number"/>
                    <button id="submitButton" type="submit" onClick={nextExpectedDate}>Ok</button>
                    <button id="reload" type="reset" onClick={reloadPage}>Reload</button>


                </div>
                <div id= "secondDiv">
                    <div id="response">
                        <div id= "nextDate"></div>
                        <div id= "ovulationPeriod"></div>
                        <div id= "safePeriod"></div>


                    </div>

                    {displayResult && <button onClick={pageResult}>{SafePeriods}</button> }
                </div>
            </div>



        </div>)
}
export default CircleCalculator