import React, {useState} from 'react';
import style from './App.css';
import Input from './containers/Input/Input';
import Hotels from './containers/Hotels/Hotels';
import hotelPic from './assets/pic.JPG';

function App() {
    const [state, setState] = useState({
        hotels:[
            {id: 'i1', name:'club hotel', distance: 0.7, src: {hotelPic}, desc: 'hotel', rate: 4.5},
            {id: 'i2', name:'leonardo', distance: 0.4, src: {hotelPic}, desc:'hotel' , rate: 3.5},
            {id: 'i3', name:'magic palace', distance: 1.7, src: {hotelPic}, desc: 'hotel', rate: 5.0}
        ]
    });
  return (
    <div className={style.App}>
      <h1>Find Hotels</h1>
      <Input/>
      <Hotels hotels={state.hotels}/>
    </div>
  );
}

export default App;
