import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Key.css';




function Key(props) {

    const handleClick = () => props.passData(props.cur + props.value);
    

    
 return (
     <div className = "Key">
         <button className = "Key-font" onClick = {handleClick} name = {props.value}>{props.value}</button>
         </div>
        );
}
export default Key;