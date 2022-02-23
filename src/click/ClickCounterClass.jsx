import React, {Component} from 'react';

class ClickCounterClass extends Component {
    constructor(props) {
        super(props);
        this.state ={
            clicks: parseInt(props.initialValue) || 0
        };
    }
    render() {
        const localOnClick = () => {
            this.setState({clicks: this.state.clicks + 1});
            this.props.onClick && this.props.onClick();
        };

        return (
            <div>
                <h2>Click Counter (class)</h2>
                Clicks: {this.state.clicks} - <button onClick={localOnClick}>Click me!</button>
            </div>
        );
    }
}

export default ClickCounterClass;