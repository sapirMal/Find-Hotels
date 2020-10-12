import React, {Component} from 'react';
import InputLocation from './InputLocation';
import InputDates from './InputDates';
import InputRooms from "./InputRooms";


class Input extends Component {
    state = {
        hideDate: true,
        minStartDate: new Date().toISOString().slice(0, 10),
        minExitDate: "",
        startValue: new Date().toISOString().slice(0, 10),
        showComment1: false,
        showComment2: false
    };


    changedStartDate = (event) => {
        if (new Date(event.target.value) >= new Date()) {
            this.setState({
                hideDate: false,
                startValue: event.target.value,
                minExitDate: event.target.value,
                showComment1: false,
            })
        }
        else {
            this.setState({
                showComment1: true,
                hideDate: true,
            })
        }

        // TODO: check legal startDate < ExitDate
    }

    checklegalDate = (event) => {
        if (new Date(event.target.value) < new Date(this.state.startValue)) {
            this.setState({showComment2: true});
        }
        else {
            this.setState({showComment2: false});
        }
    }


    render() {
        return (
            <div>
                <InputLocation
                    place_holder="Insert location here..." />
                <InputDates
                    initValue={this.state.minStartDate}
                    changeDate={(event) => this.changedStartDate(event)}
                    show={this.state.hideDate}
                    minStart={this.state.minStartDate}
                    minExit={this.state.minExitDate}
                    styleComment={this.state.showComment}
                    legalDate={(event) => this.checklegalDate(event)}
                // min_end={} //value-start + 1
                />
                <InputRooms/>
            </div>
        )
    }
}


export default Input;