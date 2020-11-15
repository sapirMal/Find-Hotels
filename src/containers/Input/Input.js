import React, {Component} from 'react';
import InputLocation from '../../components/InputLocation/InputLocation';
import InputDates from '../../components/InputDates/InputDates';
import InputRooms from './InputRooms/InputRooms';
import style from './Input.css';


class Input extends Component {
    state = {
        minStartDate: new Date().toISOString().slice(0, 10),
        minExitDate: null,
        startValue: new Date().toISOString().slice(0, 10),
        exitValue: null,
        hideExitDate: true,
        displayInvalidExitDate: false
    };


    // checks if the the chosen start date is not in the past
    changedStartDate = (event) => {
        let nextDay = new Date(event.target.value);
        nextDay.setDate(nextDay.getDate() + 1)
        if (this.state.exitValue === null ||
            this.state.exitValue > event.target.value) {
            this.setState({
                hideExitDate: false,
                startValue: event.target.value,
                minExitDate: nextDay.toISOString().slice(0, 10),
                displayInvalidExitDate: false
            })
        }
        else {
            this.setState({
                startValue: event.target.value,
                minExitDate: nextDay.toISOString().slice(0, 10),
                hideExitDate: false,
                displayInvalidExitDate: true
            })
        }

    }

    changedExitDate = (event) => {
        this.setState({
            exitValue: event.target.value,
            displayInvalidExitDate: false
        })
    }



    render() {
        return (
            <div className={style.Input}>
                <InputLocation
                    className={[style.Field, style.Location].join(' ')}
                    place_holder="Insert location here..." />
                <InputDates
                    className={[style.Field, style.Date].join(' ')}
                    minStart={this.state.minStartDate}
                    minExit={this.state.minExitDate}
                    changeStartDate={(event) => this.changedStartDate(event)}
                    changeExitDate={(event) => this.changedExitDate(event)}
                    showExitCalendar={this.state.hideExitDate}
                    invalidExitDate={this.state.displayInvalidExitDate}
                />
                <InputRooms
                    className={[style.Field, style.Room].join(' ')} />
                <button className={style.Search} > SEARCH </button>
            </div>
        )
    }
}


export default Input;