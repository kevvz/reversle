import Keyboard from './Keyboard';
import React from 'react';
import {useState} from 'react';
import Grid_Rows from './Grid_Rows';


function Grid (props) {
    


    return (
        <div>
        
        <h2> {props.currentList.map((key)=> <Grid_Rows value = {key} />)}</h2>
        <h2>{props.currentWord}</h2>
        </div>
    );
}

export default Grid;