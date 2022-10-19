import React from "react";
import {connect} from 'react-redux';

let card_recto = function(props) {

    return(
        <div className="container__cardRecto">
            <div className="cardRecto__circles">
                <span className="circles__one"></span>
                <span className="circles__two"></span>
            </div>
            <div className="cardRecto__numbers">
                { props.numbersOne ?
                <span className="numbers__firstBlock numbers">{props.numbersOne}</span>
                :
                <span className="numbers__firstBlock numbers">0000</span>
                }

                { props.numbersTwo ?
                <span className="numbers__secondBlock numbers">{props.numbersTwo}</span>
                :
                <span className="numbers__secondBlock numbers">0000</span>
                }

                { props.numbersThree ?
                <span className="numbers__thirdBlock numbers">{props.numbersThree}</span>
                :
                <span className="numbers__thirdBlock numbers">0000</span>
                }

                { props.numbersFour ?
                <span className="numbers__fourthBlock numbers">{props.numbersFour}</span>
                :
                <span className="numbers__fourthBlock numbers">0000</span>
                }

            </div>
            <div className="cardRecto__bottomInfos">
                { props.name ? 
                <div className="bottomInfos__name">{props.name}</div>
                :
                <div className="bottomInfos__name">---- ----</div>
                }
                <div className="bottomInfos__date">
                    {props.dateMonth ?
                    <span className="date__month">{props.dateMonth}</span>
                    :
                    <span className="date__month">XX</span>
                    }

                    <span className="date__divider">/</span>
                    
                    {props.dateYear ?
                    <span className="date__year">{props.dateYear}</span>
                    :
                    <span className="date__year">XX</span>
                    }
                </div>

            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return { 
        name: state.userName,
        numbersOne: state.numbersOne,
        numbersTwo: state.numbersTwo,
        numbersThree: state.numbersThree,
        numbersFour: state.numbersFour,
        dateMonth: state.dateMonth,
        dateYear: state.dateYear,
        cvv: state.cvv,
    }} 
   export default connect
   (
    mapStateToProps, 
    null
    )
   (card_recto);