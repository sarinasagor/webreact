import React, {Component} from 'react';


class Counter extends Component {
    state = {
        value: this.props.value,
        class: "list-group-item list-group-item-success m-2",
    }

    handleIncrement = () => {
        this.setState({value: this.state.value + 1});
        this.setState({class: this.state.class + " active"});
    }

    handleDecrement = () => {
        this.setState({value: this.state.value - 1});
    }


    style = {
        marginBottom: "0px important",
    }
    badgeStyle = {
        minWidth: "50px",
    }

    render() {
        return (
            <React.Fragment>
                <div className="list-groups">
                    <button className={this.getBadgeClasses()}>
                        <span className="badge" style={this.badgeStyle}>{this.formatValue()}</span>
                    </button>
                    <button onClick={this.handleIncrement} type="button" className="m-2 btn btn-primary"
                            style={this.style}>Increment
                    </button>
                    <button onClick={this.state.value >= 1 ? this.handleDecrement : () => {
                        return false
                    }} type="button"
                            className="m-2 btn btn-info"
                            style={this.style}>Decrement
                    </button>
                    <button onClick={this.props.onDelete} className="btn btn-danger">Delete</button>
                </div>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "m-2 btn btn-";
        classes += this.state.value === 0 ? 'warning' : 'success';
        return classes;
    }

    formatValue() {
        const {value} = this.state;
        return value === 0 ? 'Zero' : value
    }
}

export default Counter;