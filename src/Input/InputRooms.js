import React, {Component} from 'react';
import './InputRooms.css';

class InputRooms extends Component{

    state = {
        numOfRooms: 1,
        numOfGuests: 2
    }

    incrementValueRooms = () => {
        const currRoomsValue = this.state.numOfRooms;
        const currGuestsValue = this.state.numOfGuests;
        if (currGuestsValue < currRoomsValue + 1)
            this.setState(
                {numOfGuests: currGuestsValue + 1});
        this.setState({
            numOfRooms: currRoomsValue + 1
        });
    };

    decrementValueRooms = () => {
        const currValue = this.state.numOfRooms;
        if(currValue > 1)
            this.setState(
                {numOfRooms: currValue - 1})
    };


    incrementValueGuests = () => {
        const currValue = this.state.numOfGuests;
        this.setState(
            {numOfGuests: currValue + 1});
    };

    decrementValueGuests = () => {
        const currValue = this.state.numOfGuests;
        if(currValue - 1 >= this.state.numOfRooms)
            this.setState(
                {numOfGuests: currValue - 1})
    };


    render(){
        return (
            <span className="input-group">
                <input type="button" onClick={this.decrementValueRooms} value="-" className="button-minus" data-field="quantity"/>
                    <input type="number" value={this.state.numOfRooms}  name="quantity" className="quantity-field" readOnly />
                        <input type="button" onClick={this.incrementValueRooms} value="+" className="button-plus" data-field="quantity"/>
                <input type="button" onClick={this.decrementValueGuests} value="-" className="button-minus" data-field="quantity"/>
                    <input type="number" value={this.state.numOfGuests}  name="quantity" className="quantity-field" readOnly />
                        <input type="button" onClick={this.incrementValueGuests} value="+" className="button-plus" data-field="quantity"/>
            </span>
        );
    }
}

export default InputRooms;
