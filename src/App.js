import React, { useEffect, useState } from 'react';
import MovingComponent from 'react-moving-text'
import Heart from './Heart';
import './App.css';
import Gallery from './Gallery';
import Countdown from './CountDown';
import Wait5s from './Wait5s';
import moment from 'moment';

function App() {
  const [innerHeight] = useState(window.innerHeight)
  const [innerWidth] = useState(window.innerWidth)
  const [start, setStart] = useState(false)
  const [countdown, setCountdown] = useState(false)
  const [indexImg, setIndexImg] = useState(0)
  const [countTime, setCountTime] = useState(false)

  useEffect(() => {
    if (countdown) {
      var myAudio = document.getElementById("myAudio");
      myAudio.play();
      setTimeout(() => {
        setStart(true)
      }, 1500);
    }
  }, [countdown])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexImg(seconds => {
        let newIndex = seconds + 1 < 6 ? seconds + 1 : 0
        return newIndex
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    const interval = setTimeout(() => {
      const timeDifference = moment('2024-03-10 00:00:00.000').diff(moment(), 'seconds');
      setCountTime(!(timeDifference > 0))
    }, 1000);
    return () => clearInterval(interval);
  },[])

  return (
    <div>
      {
        true ?
          <>
            <Heart showText={start} indexImg={indexImg}/>
            <div className='onTop' style={{ display: start ? 'none' : '' }}>
              {
                countdown ?
                  <Wait5s innerWidth={innerWidth} innerHeight={innerHeight} /> :
                  <div>
                    <Gallery />
                    <div className='TextMove'>
                      <MovingComponent type="typewriter"
                        dataText={[
                          'Hello',
                          'Vk iu ơi',
                          'Click vào ô dưới nha!!'
                        ]} />
                    </div>
                  </div>
              }
              <div className='BtnStart'>
                <button onClick={() => {
                  setCountdown(true)
                }} className="primary">
                  Bắt đầu thôi
                </button>
                <audio
                  id="myAudio"
                  controls={false}
                  src='https://firebasestorage.googleapis.com/v0/b/linh-anna.appspot.com/o/HPBD_PTD.mp3?alt=media&token=94f6f44f-d1c4-482a-892f-0424d9245f5a'>
                </audio>
              </div>
            </div>
          </>
          :
          <Countdown />
      }
    </div>
  )
}
export default App