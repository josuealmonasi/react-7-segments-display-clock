import { useEffect, useState } from "react";
import Dots from "./components/dots";
import SevenSegmentsDisplay from "./components/sevenSegmentsDisplay";
import "./styles.css";
import { clock } from "./utils/clock";

const App = () => {
  const [time, setTime] = useState({ hour: "88", min: "88", sec: "88" });

  useEffect(() => {
    const timer = setTimeout(() => {
      const now = clock();
      setTime(now);
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  const style = {
    display: "flex",
    justifyContent: "space-between",
    width: "620px",
    margin: " 40px auto",
    background: "black",
    border: "10px grey solid",
    padding: "20px"
  };

  return (
    <div className="App" style={style}>
      <SevenSegmentsDisplay number={+time.hour[0]} />
      <SevenSegmentsDisplay number={+time.hour[1]} />
      <Dots />
      <SevenSegmentsDisplay number={+time.min[0]} />
      <SevenSegmentsDisplay number={+time.min[1]} />
      <Dots />
      <SevenSegmentsDisplay number={+time.sec[0]} />
      <SevenSegmentsDisplay number={+time.sec[1]} />
    </div>
  );
};

export default App;
