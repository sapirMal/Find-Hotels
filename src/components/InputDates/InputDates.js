import React from 'react';
import Aux from '../../hoc/Auxiliary';



const input_dates = (props) => {
    const styleComment1 = props.styleComment1 ? {visibility: "visible"} : {visibility: "hidden"};
    const styleComment2 = props.styleComment2 ? {visibility: "visible"} : {visibility: "hidden"};



    return (
        <Aux>
            <input
                type="date"
                onChange={props.changeDate}
                // defaultValue={props.initValue}
                min={props.minStart}>
            </input>
            {/*<label style={styleComment1}>Date must be present or future</label>*/}
            <input
                type="date"
                disabled={props.show}
                min={props.minExit}
                onChange={props.legalDate}
            >
            </input>
            {/*<label style={styleComment2}>Date must be after start date</label>*/}
            {/* TODO: handle message to user when typing invalid date*/}
        </Aux>
    )
}


export default input_dates;

