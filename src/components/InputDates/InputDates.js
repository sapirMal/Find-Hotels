import React from 'react';
import Aux from '../../hoc/Auxiliary';
import style from './InputDates.css';



const input_dates = (props) => {

    return (
        <Aux >
            <div className={[props.className, style.Container].join(' ')}            >
                <label
                    className={style.Label}
                    for='start'>Check in</label>
                <input
                    className={style.InputField}
                    name='start'
                    id='start'
                    type='date'
                    onChange={props.changeStartDate}
                    min={props.minStart}>
                </input>
            </div>
            {/*<label style={styleComment1}>Date must be present or future</label>*/}
            <div className={props.invalidExitDate ? [props.className, style.Container, style.Red].join(' ') :
                props.showExitCalendar ? [props.className, style.Container, style.Disabled].join(' ') : [props.className, style.Container].join(' ')}>

                <label
                    className={props.showExitCalendar ? [style.Label, style.Gray].join(' ') :
                    props.invalidExitDate ? [style.Label, style.Red].join(' ') : style.Label}
                    for='exit'>Check out</label>
                <input

                    className={style.InputField}
                    name='exit'
                    id='exit'
                    type='date'
                    disabled={props.showExitCalendar}
                    min={props.minExit}
                    onChange={props.changeExitDate}
                >
                </input>
            </div>
            {/*<label style={styleComment2}>Date must be after start date</label>*/}
            {/* TODO: handle message to user when typing invalid date*/}
        </Aux >
    )
}


export default input_dates;

