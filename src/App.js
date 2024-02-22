import './App.css';
import Btn from './Components/Btn';
import Count from './Components/Count';
import logo from './assets/logo.png';
import { useState } from 'react'; //For hooks

function App() {
  //First value will have the 'x' value from useState(x).
  //Call the second value everytime you want to update the 1st one
  const [numClics, setNumClics]= useState(0);

  const buttonHandler=()=>{
    setNumClics(numClics+1);
  };

  const resetCount=()=>{
    setNumClics(0);
  };
  return (
    <div className="App">
      <div className="logo-container">
        <img className='logo'
        src={logo} 
        alt='logo'/>
      </div>

      <div className='main-container'>
        <Count 
        numClics={numClics}/>
        <Btn 
        buttonText='Click'
        isButtonClick={true}
        buttonHandler={buttonHandler} />

        <Btn
        buttonText='Reset'
        isButtonClick={false}
        buttonHandler={resetCount} />
      </div>
    </div>
  );
}

export default App;
