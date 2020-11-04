import React, {Component} from 'react';
import InputLocation from '../../components/InputLocation/InputLocation';
import InputDates from '../../components/InputDates/InputDates';
import InputRooms from "./InputRooms/InputRooms";


class Input extends Component {
    state = {
        minStartDate: new Date().toISOString().slice(0, 10),
        minExitDate: '',
        startValue: new Date().toISOString().slice(0, 10),
        exitValue: '',
        hideExitDate: true,
        displayInvalidExitDate: false
    };


    // checks if the the chosen start date is not in the past
    changedStartDate = (event) => {
        if (event.target.value >= new Date().toISOString().slice(0, 10)) {
            let nextDay = new Date(event.target.value);
            nextDay.setDate(nextDay.getDate() + 1)
            this.setState({
                hideExitDate: false,
                startValue: event.target.value,
                minExitDate: nextDay.toISOString().slice(0, 10),
                displayInvalidExitDate: false,
            })
        }
        else {
            this.setState({
                hideExitDate: true,
            })
        }
        this.checkExitBeforeStart(this.state.exitValue);
    }

    changedExitDate = (event) => {
        this.checkExitBeforeStart(event.target.value);
    }

    checkExitBeforeStart = (exitDate) => {
        if (exitDate <= this.state.startValue) {
            this.setState({displayInvalidExitDate: true});
        }
        else {
            this.setState({
                exitValue: exitDate,
                displayInvalidExitDate: false});
        }
    }



    render() {
        return (
            <div>
                <InputLocation
                    place_holder="Insert location here..." />
                <InputDates
                    minStart={this.state.minStartDate}
                    minExit={this.state.minExitDate}
                    changeStartDate={(event) => this.changedStartDate(event)}
                    changeExitDate={(event) => this.changedExitDate(event)}
                    showExitCalendar={this.state.hideExitDate}
                    invalidExitDate={this.state.displayInvalidExitDate}
                />
                <InputRooms/>
            </div>
        )
    }
}


export default Input;