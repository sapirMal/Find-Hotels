import React, {useState} from 'react';
import InputLocation from '../../components/InputLocation/InputLocation';
import InputDates from '../../components/InputDates/InputDates';
import InputRooms from './InputRooms/InputRooms';
import style from './Input.css';


const Input = () => {

    const [minStartDate, setMinStartDate] = useState(new Date().toISOString().slice(0, 10));
    const [minExitDate, setMinExitDate] = useState(null);
    const [startValue, setStartValue] = useState(new Date().toISOString().slice(0, 10));
    const [exitValue, setExitValue] = useState(null);
    const [hideExitDate, setHideExitDate] = useState(true);
    const [displayInvalidExitDate, setDisplayInvalidExitDate] = useState(false);


    // checks if the the chosen start date is not in the past
    const changedStartDate = (event) => {
        let nextDay = new Date(event.target.value);
        nextDay.setDate(nextDay.getDate() + 1)
        if (exitValue === null || exitValue > event.target.value) {
            setHideExitDate(false);
            setStartValue(event.target.value);
            setMinExitDate(nextDay.toISOString().slice(0, 10));
            setDisplayInvalidExitDate(false);
        }
        else {
            setStartValue(event.target.value);
            setMinExitDate(nextDay.toISOString().slice(0, 10));
            setHideExitDate(false);
            setDisplayInvalidExitDate(true);
        }
    };

    const changedExitDate = (event) => {

        setExitValue(event.target.value);
        setDisplayInvalidExitDate(false);
    };


    return (
        <form className={style.Input}>
            <InputLocation
                className={[style.Field, style.Location].join(' ')}
                place_holder="Insert location here..." />
            <InputDates
                className={[style.Field, style.Date].join(' ')}
                minStart={minStartDate}
                minExit={minExitDate}
                changeStartDate={(event) => changedStartDate(event)}
                changeExitDate={(event) => changedExitDate(event)}
                showExitCalendar={hideExitDate}
                invalidExitDate={displayInvalidExitDate}
            />
            <InputRooms
                className={[style.Field, style.Room].join(' ')} />
            <button className={style.Search} > SEARCH </button>
        </form>
    )
}



export default Input;