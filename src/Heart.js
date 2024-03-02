import React, { useEffect, useState } from "react";
import MovingComponent from 'react-moving-text'
import IMG_1 from './assets/images/img_1.jpeg'
import IMG_2 from './assets/images/img_2.jpeg'
import IMG_3 from './assets/images/img_3.jpeg'
import IMG_4 from './assets/images/img_4.jpeg'
import IMG_5 from './assets/images/img_5.jpeg'
import IMG_6 from './assets/images/img_6.jpeg'
import LIST_ICON from './assets/list_icon.svg'
import ReactCardFlip from "react-card-flip";
import './Helper'

function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

const Heart = ({ showText = false, indexImg = 0 }) => {
  const listBackgroundImage = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6]
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (showText) {
      AddLibrary('https://firebasestorage.googleapis.com/v0/b/luon-leo.appspot.com/o/Helper.js?alt=media&token=16083397-86b8-4823-ad7e-35ed32610bd5')
    }
  }, [showText])

  const openMessage = () => {
    setFlip(true)
  }

  return (
    <ReactCardFlip 
      isFlipped={flip}
      flipSpeedBackToFront={1.5}
      flipSpeedFrontToBack={1.5}
    >
      <div>
        <div style={{ height: window.innerHeight }}>
          <div className="heart_background" style={{ height: window.innerHeight, backgroundImage: `url(${listBackgroundImage[indexImg]})` }} ></div>
          <canvas id="pinkboard" width={window.innerWidth} height={window.innerHeight - 200}></canvas>
          <div className="TextMoveCenter" onClick={()=>setFlip(true)}>
            <MovingComponent
              type="jelly"
              duration="1700ms"
              delay="0"
              direction="normal"
              timing="linear"
              iteration="infinite"
              fillMode="none">
              10/03/2024
            </MovingComponent>
          </div>
          {
            showText ?
              <div className="TextMoveCenter" style={{ marginTop: 20, color: "white" }}>
                <MovingComponent
                  type="typewriter"
                  dataText={[
                    'Linh ơi! Cảm ơn vk đã đến với cuộc đời của ck',
                    'Cảm ơn vk đã cho ck cơ hội được ở bên vk.'
                  ]} />
              </div> : ''}
          <div className="absolute">
            <img onClick={() => { openMessage() }} height={30} alt="LIST_ICON" src={LIST_ICON} />
          </div>
        </div>
      </div>
      <div >
        <div className="text-message"> 
          <p>
          <p style={{textAlign: 'center', fontWeight: 'bolder'}}>❤️ CK yêu VK ❤️ </p>
          <span style={{marginLeft: 10}}>😋</span>Từ khi có VK thêm niềm vui và thêm vô vàng cảm xúc hạnh phúc. <br/>
          <span style={{marginLeft: 10}}>😍</span>Dù CK bận hay phải lo toang vì cuộc sống nhưng từ đây CK đã có mục tiêu cố gắng mang lại thật nhiều thật nhiều hạnh phúc đến cho VK. <br/>
          <span style={{marginLeft: 10}}>😍</span>CK thêm niềm vui vì từ bây giờ niềm vui không chỉ riêng CK, mà còn đó là VK, là người CK yêu thương, người rất đặc biệt với CK, với cuộc sống hiện tại và sau này của CK.<br/>
          <span style={{marginLeft: 10}}>😍</span>CK có thêm vô vàng hạnh phúc, vì mỗi ngày ở với VK, CK rất vui, niềm hạnh phúc của CK. Từ khi có VK, cuộc sống CK tích cực hơn, hạnh phúc hơn rất nhiều.
          ❤️ và VK cũng là người mà có thể nói CK chưa bao giờ yêu thương một cách đặt biệt như vậy. có lẽ trong CK, CK đã tìm được nửa còn lại của CK. <br/>
          <span style={{marginLeft: 10}}>😘</span>Cảm ơn VK rất nhiều đã đến với cuộc sống của CK, CK sẽ không nói, sẽ không hứa, nhưng CK sẽ cho thấy VK là người duy nhất CK yêu thương.<br/>
          <span style={{marginLeft: 10}}>😂</span>Cảm ơn rất nhiều, đã đặt niềm tin vào CK. <br/>
          ❤️❤️❤️❤️VK là người duy nhất và CK sẽ là người cuối cùng . ❤️❤️❤️❤️
          <div onClick={()=>setFlip(false)} style={{textAlign: 'center', marginTop: '15px'}}>
            <MovingComponent
              type="typewriter"
              dataText={[
                '❤️ Zacy x Anna ❤️'
            ]} />
          </div>
            </p>
        </div>
        
      </div>

    </ReactCardFlip>
  )
}
export default React.memo(Heart)