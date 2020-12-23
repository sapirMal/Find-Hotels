import React, {Component} from 'react';
import style from './InputRooms.css';

class InputRooms extends Component {

    state = {
        numOfRooms: 1,
        numOfGuests: 2,
        showMinusRooms: true,
        showMinusGuests: false
    }

    incrementValueRooms = () => {
        this.setState((prevState, props) => {
            if (prevState.numOfGuests <= prevState.numOfRooms + 1)
                return {
                    numOfGuests: prevState.numOfRooms + 1,
                    showMinusGuests: true
                };
        });

        this.setState((prevState, props) => {
            return {
                numOfRooms: prevState.numOfRooms + 1,
                showMinusRooms: false
            };
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
            if (prevState.numOfGuests + 1 > prevState.numOfRooms)
                return {
                    numOfGuests: prevState.numOfGuests + 1,
                    showMinusGuests: false
                }
            else
                return {
                    numOfGuests: prevState.numOfGuests + 1,
                    showMinusGuests: true
                }
        });
    };

    decrementValueGuests = () => {
        this.setState((prevState, props) => {
            if (prevState.numOfGuests - 1 > prevState.numOfRooms)
                return {
                    numOfGuests: prevState.numOfGuests - 1
                }
            else if (prevState.numOfGuests - 1 === prevState.numOfRooms)
                return {
                    numOfGuests: prevState.numOfGuests - 1,
                    showMinusGuests: true
                }
        });
    };


    render() {
        return (
            <React.Fragment >
                <div className={[this.props.className, style.Row].join(' ')}>
                    <input type='button'
                        className={this.state.showMinusRooms ? [style.Button, style.Disabled].join(' ') : style.Button}
                        disabled={this.state.showMinusRooms}
                        onClick={this.decrementValueRooms}
                        value='-'
                        data-field='quantity' />
                    <label
                        className={style.Label}
                        for='room'>Rooms</label>

                    <input
                        className={style.InputField}
                        type='number'
                        value={this.state.numOfRooms}
                        name='room'
                        id='room'
                    />
                    <input type='button'
                        className={style.Button}

                        onClick={this.incrementValueRooms}
                        value='+'
                        data-field='quantity' />
                </div>
                <div className={[this.props.className, style.Row].join(' ')}>
                    <input
                        className={this.state.showMinusGuests ? [style.Button, style.Disabled].join(' ') : style.Button}
                        type='button'
                        disabled={this.state.showMinusGuests}
                        onClick={this.decrementValueGuests}
                        value='-'
                        data-field='quantity' />
                    <label
                        className={style.Label}
                        for='guests'>Guests</label>
                    <input
                        className={style.InputField}
                        type='number'
                        value={this.state.numOfGuests}
                        name='guests'
                        id='guests'
                    />
                    <input type='button'
                        className={style.Button}
                        onClick={this.incrementValueGuests}
                        value='+'
                        data-field='quantity' />
                </div>
            </React.Fragment>
        );
    }
}

export default InputRooms;
