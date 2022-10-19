import React from "react";
import {connect} from 'react-redux';


let card_verso = function(props) {
    return(
        <div className="container__cardVerso">
            <div className="cardVerso__blackBand"></div>
            <div className="cardVerso__crypto">
                {props.cvv ?
                <span className="crypto__numbers">{props.cvv}</span>
                :
                <span className="crypto__numbers">000</span>
                }
            </div>
            
        </div>
    )
}

function mapStateToProps(state) {
    return { 
        cvv: state.cvv,
    }} 
   export default connect
   (
    mapStateToProps, 
    null
    )
   (card_verso);