import React, {Component, Fragment} from 'react';
import Counter from "./counter";


class Counters extends Component {
    state = {
        components: [
            {id: 1, value: 1},
            {id: 2, value: 0},
            {id: 3, value: 3},
            {id: 4, value: 0},
        ]
    }

    handleDelete = (counterId) => {
        console.log('Event Handler', counterId);
    }

    render() {
        return (
            <div>
                {this.state.components.map(counter => <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} selected
                                                               id={counter.id}/>)}
            </div>
        );
    }
}

export default Counters;