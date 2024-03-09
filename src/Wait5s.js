import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">I LOVE YOU</div>;
  }

  return (
    <div className="timer">
      <div className="value" style={{color: 'red'}}>{remainingTime}</div>
    </div>
  );
};


const Wait5s = (innerWidth, innerHeight) => {
  return (
    <div className='countdown' style={{ width: innerWidth, height: innerHeight}}>
      <CountdownCircleTimer
        isPlaying
        duration={2}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 1 })}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  )
}

export default Wait5s