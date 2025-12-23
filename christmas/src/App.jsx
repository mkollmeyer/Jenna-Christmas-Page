import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getCard } from './card'
import s1 from './assets/Snapchat-1015792040.jpg'
import s2 from './assets/Snapchat-914667796.jpg'
import s3 from './assets/Snapchat-1268713502.jpg'
import s4 from './assets/Screenshot_20250223_003227_Instagram.jpg'
import s5 from './assets/Snapchat-117300956.jpg'

function App() {
  const [data, setData] = useState([]);

  const handleClick = () => {
    console.log("Click");
    setData(getCard);
    console.log(data);
  }
  return (
    <>
    <header>
      <div class="image-row-container">
          <img class="w-1/3 object-cover h-auto" src={s1} alt="Description 1"/>
          <img class="w-1/3 object-cover h-auto" src={s2} alt="Description 2"/>
          <img class="w-1/3 object-cover h-auto" src={s3} alt="Description 3"/>
          <img class="w-1/3 object-cover h-auto" src={s4} alt="Description 3"/>
          <img class="w-1/3 object-cover h-auto" src={s5} alt="Description 3"/>
      </div>
    </header>
    <body className='body'>
      <div>
        <h1 classname='header'>Merry Christmas Jenna!!!</h1>
      </div>
      <div>
        <button onClick={handleClick}>Click Me</button>
          <div className='cardContainer'> {data && <p className="customCard">{data}</p>} </div>
      </div>
    </body>
    </>
  )
}

export default App
