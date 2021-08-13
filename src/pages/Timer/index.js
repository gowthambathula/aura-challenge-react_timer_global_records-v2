// Globals
import "./styles.scss";
import React, { useState, useEffect, useRef } from "react";

// Components
import { Button } from "components/Button";

// Sub-component
function Expired() {
  return (
    <div className="aura-expired">
      <div className="aura-expired-emoji">⚠️</div>
      <div className="aura-expired-text">Timer expired!</div>
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = useInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// Component
function Timer() {
  // Hooks - state
  const [counter, setCounter] = useState(0);
  const [running,setRunning]=useState(false);
  const interval = useRef(null)

  // TODO: implement counter...
  const reset=()=>{setCounter(60);
    setRunning(false)}

  const counterValue=(x)=>{
    var date = new Date(0);
    date.setSeconds(x)
    return date.toISOString().substr(15, 4)
  }

  useEffect(() => { 
    if(counter<=0){
      setRunning(false)
      clearInterval(interval.current)
      interval.current=null 
   }
   if(running && !!!interval.current ){
     startTimer()
   }
  }, [counter,running])

  const startTimer=()=>{
     interval.current=setInterval(()=>{
      setCounter(counter=>counter-1)},1000)
  }

  // Render
  return (
    <div className="aura-page aura-timer">
      <h1>Timer</h1>

      <div className="aura-page-content">
        <div className="aura-timer-clock">{counter>=0?counterValue(counter):"0:00"}</div>
        {counter <= 0 ? <Expired /> : null}

        <div className="aura-timer-buttons">
          <Button onClick={()=>setRunning(true)}>Start</Button>
          <Button onClick={reset}>Reset</Button>
        </div>
      </div>
    </div>
  );
}

export { Timer };
