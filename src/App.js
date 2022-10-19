import React, { useState }  from 'react';
import './App.scss';

import CardRecto from './components/card_recto/card_recto';
import CardVerso from './components/card_verso/card_verso';
import Form from './components/form/form';

import userName from './redux/userName';
import numbersOne from './redux/numbersOne';
import numbersTwo from './redux/numbersTwo';
import numbersThree from './redux/numbersThree';
import numbersFour from './redux/numbersFour';
import dateMonth from './redux/dateMonth';
import dateYear from './redux/dateYear';
import cvv from './redux/cvv';

import check from './assets/check.gif'


import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';

const store = createStore(combineReducers({userName, numbersOne, numbersTwo, numbersThree, numbersFour, dateMonth, dateYear, cvv}));


function App() {

  const [overlay, setOverlay] = useState(false)

  let validation = function(){
    return(
      <div style={{display: `${overlay === false ? 'none' : 'flex'}`}} id="validation__overlay">
        <div className="overlay__popUp">
          <h1 className='popUp__title'>Paiement effectué <br/> avec succès</h1>
          <img className='popUp__img' src={check} alt='check'/>
          <button className='popUp__button' onClick={() => document.getElementById('validation__overlay').remove()} >Retour</button>
        </div>
      </div>
    )
  }


  return (
    <Provider store={store}>
      <div className="App">
        {validation()}
        <CardRecto/>
        <CardVerso/>
        <div className='App__leftBackGround'></div>
        <div className='App__rightBackGround'>
          <Form handleClick={e => {
            e.preventDefault();
            setOverlay(true)
          }}/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
