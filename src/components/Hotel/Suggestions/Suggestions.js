import React from 'react';
import classes from './Suggestions.css';

const suggestions = (props) => {
    return (
        <div className={classes.Suggestions}>
            <div className={classes.LowestSuggestion}>
                <h5>{props.lowestWebsite}</h5>
                <h3><strong>283 $</strong></h3>
                <button>Watch Suggestion</button>
            </div>
            <div className={classes.SecondSuggestion}>
                <h5>Agoda</h5>
                <h3><strong>456 $</strong></h3>
                <button>Watch Suggestion</button>
            </div>
            <button>All Suggestions</button>
        </div>
    )
}

export default suggestions;