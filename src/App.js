
import './App.css';
import React, { useEffect } from 'react';
import Grid from './Grid';
import Keyboard from "./Keyboard.js";
import "./allowed_words.txt";
import {useState, } from 'react';
/*REVERSLE ALGORITHM */

function App () {
  const [word, wordHandler] = useState("");

  const [test, enterCheck] = useState(false);

  const [wordList, listCheck] = useState([]);

  const [correctWord, correctWordHandler] = useState(newWord());

  const [count, incCount] = useState(1);


  function newWord() {
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let result = "";
    for (let i = 0; i < 5; i++)
    {
      result = result + (alphabet[Math.floor(Math.random() * 26)]);
    }
    return result;
  }
  useEffect(() =>{
    if (test){
      listCheck(wordList => [...wordList,word]);
      alert(correctWord);
      if (word == correctWord) {
        alert('poggers!');
      }
      else {
        incCount((count)=>count+1);
        alert(count);
      }
      
      
      wordHandler("");
      
      enterCheck(false);
    }
  })
  return (
  <div className = "App">
    
    <Grid currentWord = {word} currentList = {wordList}/>
    <Keyboard pow = {wordHandler} checkWord = {enterCheck} current = {word} />
    </div>
  );
}
export default App;
