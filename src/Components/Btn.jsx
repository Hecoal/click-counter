import React from 'react';
import '../stylesheets/button.css';

function Btn({buttonText, isButtonClick, buttonHandler}){
    return (
        <button 
        className={ isButtonClick ? 'button-click' : 'button-reset' }
        onClick={buttonHandler}>
        {buttonText}
        </button>
    );
}
export default Btn;