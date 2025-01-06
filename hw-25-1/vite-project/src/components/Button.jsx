import {Component} from 'react';

class Button extends Component {
    render() {
        const {onClick, text, className} = this.props;
        return (
            <button
                onClick={onClick}
                className={className}
            >
                {text}
            </button>
        );
    }
}

export default Button;