import React, {useState} from 'react';
import './App.css';
import Input from './Input/Input';
import Hotels from './Hotels/Hotels';

function App() {
    const [state, setState] = useState({
        hotels:[
            {id: 'i1', name:'club hotel', distance: 0.7, src: 'C:\\Users\\rotem\\Desktop\\react_udemy\\Find-Hotels\\src\\assets\\club_hotel.JPG', desc: 'hotel', rate: 4.5},
            {id: 'i2', name:'leonardo', distance: 0.4, src: 'leonardo.JPG', desc:'hotel' , rate: 3.5},
            {id: 'i3', name:'magic palace', distance: 1.7, src: '../src/assets/club_hotel.JPG', desc: 'hotel', rate: 5.0}
        ]
    });
  return (
    <div className="App">
      <h1>Find Hotel</h1>
      <Input/>
      <Hotels hotels={state.hotels}/>
    </div>
  );
}

export default App;
