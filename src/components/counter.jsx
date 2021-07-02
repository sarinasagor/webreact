import React, {Component} from 'react';


class Counter extends Component {
    state = {
        count: 0,
        class: "list-group-item list-group-item-success m-2",
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
        this.setState({class: this.state.class + " active"});
    }
    style = {
        marginBottom: "0px important",
    }

    render() {
        console.log("Props", this.props)
        return (
            <React.Fragment>
                <div className="list-group">
                    <button onClick={this.handleIncrement} style={this.style}
                            className={this.state.class}>Increment <span
                        className="badge">{this.formatCount()}</span></button>
                </div>
            </React.Fragment>
        );
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count
    }
}

export default Counter;