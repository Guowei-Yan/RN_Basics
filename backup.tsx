import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


import React,{Component,useState,useEffect} from "react";
import CardSingle from "./SingleCard";
import {Get} from'../expand/HiNet';
import Store from '../expand/StoreRedux';

function Cards(props:any){
    var indents= [];
    let data = Fetch();
    console.log(data);
    for(let i = 1; i<=Object.keys(data).length;i++){
        indents.push(<CardSingle
                    />);
    };
    return(<div>{indents}</div>)
}
export default Cards;
