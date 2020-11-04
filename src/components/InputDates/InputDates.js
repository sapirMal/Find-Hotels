import React from 'react';
import Aux from '../../hoc/Auxiliary';
import style from './InputDates.css';



const input_dates = (props) => {

    return (
        <Aux>
            <input
                type="date"
                onChange={props.changeStartDate}
                min={props.minStart}>
            </input>
            {/*<label style={styleComment1}>Date must be present or future</label>*/}
            <input
                type="date"
                disabled={props.showExitCalendar}
                min={props.minExit}
                onChange={props.changeExitDate}
                className={props.invalidExitDate ? style.Red : null}
            >
            </input>
            {/*<label style={styleComment2}>Date must be after start date</label>*/}
            {/* TODO: handle message to user when typing invalid date*/}
        </Aux>
    )
}


export default input_dates;

