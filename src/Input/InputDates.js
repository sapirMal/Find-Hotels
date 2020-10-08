import React from 'react';



const input_dates = (props) => {
    const styleComment1 = props.styleComment1 ? {visibility: "visible"} : {visibility: "hidden"};
    const styleComment2 = props.styleComment2 ? {visibility: "visible"} : {visibility: "hidden"};



    return (
        <span>
            <input
                type="date"
                onChange={props.changeDate}
                // defaultValue={props.initValue}
                min={props.minStart}>
            </input>
            <input
                type="date"
                disabled={props.show}
                min={props.minExit}
                onChange={props.legalDate}
            >
            </input>
            <br />
            <span style={styleComment1}>Date must be present or futur</span>
            <span style={styleComment2}>Date must be after start date</span>
        </span>
    )
}


export default input_dates;

