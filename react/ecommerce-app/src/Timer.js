import { useState,useEffect } from "react";
function Timer(){
    const idleTime=5;
    let completedTimeInSeconds=0;
    const[timeStr,setTimeStr]=useState('05:00');
    const intervalFunc=setInterval(timer,1000);
    useEffect(()=>{
        return ()=>{
            //before component is getting destroyed
            clearInterval(intervalFunc);
        }
    },[]);
    const appendZero=(value)=>{
        return value< 10 ? '0'+ value :value;
    };
    const timer =() => {
        completedTimeInSeconds++;
        const timeLeftInSeconds=(idleTime-completedTimeInSeconds)%60;
        const timeLeftInMins=parseInt((idleTime-completedTimeInSeconds)/60);
        setTimeStr(`${appendZero(timeLeftInMins)}:${appendZero(timeLeftInSeconds)}`);
        if(idleTime<completedTimeInSeconds){
            clearInterval(intervalFunc);
        }
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h2>Time left:{timeStr}</h2>
                </div>
            </div>
        </div>
    );
}
export default Timer();