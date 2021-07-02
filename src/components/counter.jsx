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

    handleDecrement = () => {
        this.setState({count: this.state.count - 1});
    }

    style = {
        marginBottom: "0px important",
    }
    badgeStyle = {
        minWidth: "50px",
    }

    render() {
        console.log("Props", this.props)
        return (
            <React.Fragment>
                <div className="list-groups">
                    <button className={this.getBadgeClasses()}>
                        <span className="badge" style={this.badgeStyle}>{this.formatCount()}</span>
                    </button>
                    <button onClick={this.handleIncrement} type="button" className="m-2 btn btn-primary"
                            style={this.style}>Increment
                    </button>
                    <button onClick={this.state.count >= 1 ? this.handleDecrement : () => {
                        return false
                    }} type="button"
                            className="m-2 btn btn-info"
                            style={this.style}>Decrement
                    </button>
                </div>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "m-2 btn btn-";
        classes += this.state.count === 0 ? 'warning' : 'success';
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count
    }
}

export default Counter;