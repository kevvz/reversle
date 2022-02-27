import Key from "./Key";
import React from 'react';
import './Keyboard.css';
import {useEffect} from 'react';
import App from "./App";
function Keyboard (props) {
    
    
    
    
    function keyHandler(e) {
        
        if (e.code == 'Backspace') {
            return props.pow(props.current.slice(0,props.current.length-1));
        }
        
        
          if(e.code == 'Enter'){
            if (props.current.length < 5)
            { 
                alert('not long enough!');
            }
            else {
                
                return props.checkWord(true);
            }
            
        }
        else if ((e.key.length === 1 && e.key.match(/[a-z]/i))&&(props.current.length <5)){
            return props.pow(props.current+e.key.toUpperCase());
        }
    }
    useEffect(() =>    {
        window.addEventListener('keydown',keyHandler);
        props.pow(props.current);
        return () =>{
        window.removeEventListener('keydown',keyHandler)};
    }
    );
    
    return(<div>
        
    <div className = "keyboard-container" >
     {['Q','W','E','R','T','Y','U','I','O','P'].map((key) => 
     (<Key 
     value = {key}
     cur = {props.current}
     passData = {props.pow} /> ))}
     </div>
     <div className = "keyboard-container">
     {['A','S','D','F','G','H','J','K','L'].map((key) => (<Key 
     value = {key} 
     cur = {props.current}
     passData = {props.pow}  />))}
     </div>
     <div className = "keyboard-container">
         {['<-','Z','X','C','V','B','N','M','->'].map((key) => (<Key 
         value = {key} 
         cur = {props.current}
         passData = {props.pow} />))}
     </div>
     </div>
     
    );
}

export default Keyboard