import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { format } from "date-fns";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div class="clock-wrapper">
        <h3> Dynamic Color Clock </h3>
        <p class="date-p"> {format(currentTime, "EEEE, dd MMMM yyyy")}</p>
        <p class="time-p"> {format(currentTime, "hh:mm:ss a")} </p>
    </div>
  )
}

export default App
