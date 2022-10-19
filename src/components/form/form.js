import React from "react";
import {connect} from 'react-redux';


let Form = function(props){

    return(
        <form className="form" onSubmit={e=>props.handleClick(e)}>
            <div className="form__name">
                <label htmlFor="name" id='name'>Prénom - Nom</label>
                <input type='text' id='name' placeholder="John Doe" onChange={(e)=> {props.onChangeInputsName(e.target.value)}} />
            </div>
            <div className="form__number">
                <label htmlFor="number" id='number'>Numéro de la carte</label>
                    <div className="number__containerNumbers">
                        <input maxLength='4' minLength='4' type='text' className='number' placeholder="1234" onChange={(e)=> {props.onChangeInputsNumbersOne(e.target.value)}} />
                        <input maxLength='4' minLength='4' type='text' className='number' placeholder="5678" onChange={(e)=> {props.onChangeInputsNumbersTwo(e.target.value)}} />
                        <input maxLength='4' minLength='4' type='text' className='number' placeholder="9123" onChange={(e)=> {props.onChangeInputsNumbersThree(e.target.value)}} />
                        <input maxLength='4' minLength='4' type='text' className='number' placeholder="4567" onChange={(e)=> {props.onChangeInputsNumbersFour(e.target.value)}} />
                    </div>
            </div>
            <div className="form__bottom">
                <div className="bottom__containerFormDate">
                    <label htmlFor="date" id="date">Date exp. (MM / AA)</label>
                    <div className="containerFormDate__date">
                        <input  maxLength='2' minLength='2' type='text' id='month' placeholder="MM" onChange={(e)=> {props.onChangeInputsDateMonth(e.target.value)}} />
                        <input  maxLength='2' minLength='2' type='text' id='year' placeholder="AA" onChange={(e)=> {props.onChangeInputsDateYear(e.target.value)}} />
                    </div>
                </div>
                <div className="bottom__cvv">
                    <label  htmlFor="cvv" id='cvv'>CVV</label>
                    <input type='text' id='cvv' placeholder="123" maxLength='3' minLength='3' onChange={(e)=> {props.onChangeInputsCvv(e.target.value)}} />
                </div>
            </div>
            <button type="submit" className="form__submit">Valider</button>
        </form>
    )
}

function mapDispatchToProps(dispatch) {
    return {
      onChangeInputsName: function(name) {
          dispatch( {type: 'sendName', name})
      },
      onChangeInputsNumbersOne: function(numbersOne){
        dispatch( {type : 'sendNumbersOne', numbersOne})
      },
      onChangeInputsNumbersTwo: function(numbersTwo){
        dispatch( {type : 'sendNumbersTwo', numbersTwo})
      },
      onChangeInputsNumbersThree: function(numbersThree){
        dispatch( {type : 'sendNumbersThree', numbersThree})
      },
      onChangeInputsNumbersFour: function(numbersFour){
        dispatch( {type : 'sendNumbersFour', numbersFour})
      },
      onChangeInputsDateMonth: function(dateMonth){
        dispatch( {type : 'sendDateMonth', dateMonth})
      },
      onChangeInputsDateYear: function(dateYear){
        dispatch( {type : 'sendDateYear', dateYear})
      },
      onChangeInputsCvv: function(cvv){
        dispatch( {type : 'sendCvv', cvv})
      },
    }
   }

export default connect(
    null, 
    mapDispatchToProps)
    (Form);;