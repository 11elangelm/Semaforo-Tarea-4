import expect from 'expect';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import '../sass/styles.scss';

// Javascript the good parts

const Semaforo = ({state}) =>(
  <div>
    <div class="frame">
        <div class={state===2 ? 'red light on' :'red light'}></div>
        <div class={state===1 ? 'yellow light on' :'yellow light'}></div>
        <div class={state===0 ? 'green light on' :'green light'}></div>
    </div>
    <button onClick={() => store.dispatch({type:'INCREMENT'})}>Cambiar</button>
    <button onClick={() => store.dispatch({type:'RESET'})}>Reset</button>
  </div>
);

const timer = (state = 0, action)=>{
  if (action.type === 'INCREMENT'){
    switch (state){
      case 0:
        return 1;
      case 1:
        return 2;
      case 2:
        return 0;
      default:
        return state;
    }
  } else if (action.type === 'RESET'){
      return 0;
  }
  return state;
}

const store = createStore(timer);

const render = () => {
  ReactDOM.render(
    <Semaforo state={store.getState()}/>,
    document.getElementById('root')
    );
}

store.subscribe(render);
render();