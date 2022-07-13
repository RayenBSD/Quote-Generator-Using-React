import { useState } from 'react';
import './App.css';

function App() {

  const getAdvice = async () => {
    const random = Math.floor(Math.random() * 200);
    const req = await (await fetch(`https://api.adviceslip.com/advice/${random}`)).json();
    //console.log(req);
    console.log(Math.random(), Math.floor(Math.random() * 200));
    setAdvice(req.slip.advice);
  }

  const [advice, setAdvice] = useState('');

  return (
    <div className="App">
      <div className='container'>
        <p>{advice}</p>
        <input type="button" value="Generate" onClick={getAdvice}/>
      </div>
    </div>
  );
}

export default App;
