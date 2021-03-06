import React, {Component, Fragment} from 'react';
import Counter from "./counter";


class Counters extends Component {
    state = {
        components: [
            {id: 1, value: 1},
            {id: 2, value: 2},
            {id: 3, value: 3},
            {id: 4, value: 0},
        ]
    }

    render() {
        return (
            <div>
                {this.state.components.map(counter => <Counter key={counter.id} value={counter.value} />)}
            </div>
        );
    }
}

export default Counters;