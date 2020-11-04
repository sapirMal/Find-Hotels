import React, {Component} from 'react';
import './InputRooms.css';
import Aux from '../../../hoc/Auxiliary';

class InputRooms extends Component{

    state = {
        numOfRooms: 1,
        numOfGuests: 2,
        showMinusRooms: true,
        showMinusGuests: false
    }

    incrementValueRooms = () => {
        this.setState((prevState, props) =>
        {
            if (prevState.numOfGuests <= prevState.numOfRooms + 1)
                return {numOfGuests: prevState.numOfRooms + 1,
                        showMinusGuests: true};
        });

        this.setState((prevState, props) => {
            return {numOfRooms: prevState.numOfRooms + 1,
                    showMinusRooms: false};
        });
    };

    decrementValueRooms = () => {
        this.setState((prevState, props) => {
                if (prevState.numOfRooms > 2)
                    return {numOfRooms: prevState.numOfRooms - 1};
                else
                    return {
                        numOfRooms: prevState.numOfRooms - 1,
                        showMinusRooms: true
                    };
            }
        )
    };


    incrementValueGuests = () => {
        this.setState((prevState, props) => {
            if(prevState.numOfGuests + 1 > prevState.numOfRooms)
                return {numOfGuests: prevState.numOfGuests + 1,
                        showMinusGuests: false}
            else
                return {numOfGuests: prevState.numOfGuests + 1,
                    showMinusGuests: true}
        });
    };

    decrementValueGuests = () => {
        this.setState((prevState, props) => {
            if(prevState.numOfGuests -1 > prevState.numOfRooms)
                return {
                    numOfGuests: prevState.numOfGuests - 1
                }
            else if(prevState.numOfGuests -1 === prevState.numOfRooms)
                return {
                    numOfGuests: prevState.numOfGuests - 1,
                    showMinusGuests: true
                }
        });
    };


    render(){
        return (
            <Aux className="input-group">
                <label>Rooms:</label>
                <input type="button"
                       disabled={this.state.showMinusRooms}
                       onClick={this.decrementValueRooms}
                       value="-"
                       className="button-minus"
                       data-field="quantity"/>
                <input type="number"
                       value={this.state.numOfRooms}
                       name="quantity"
                       className="quantity-field" readOnly />
                <input type="button"
                       onClick={this.incrementValueRooms}
                       value="+"
                       className="button-plus"
                       data-field="quantity"/>

                 <label>Guests:</label>
                <input type="button"
                       disabled={this.state.showMinusGuests}
                       onClick={this.decrementValueGuests}
                       value="-"
                       className="button-minus"
                       data-field="quantity"/>
                <input type="number"
                       value={this.state.numOfGuests}
                       name="quantity"
                       className="quantity-field" readOnly />
                <input type="button"
                       onClick={this.incrementValueGuests}
                       value="+"
                       className="button-plus"
                       data-field="quantity"/>
            </Aux>
        );
    }
}

export default InputRooms;
