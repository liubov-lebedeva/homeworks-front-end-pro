import {Component} from "react";

class SmileButton extends Component {
    handleVote = () => {
        this.props.onVote(this.props.smileName);
    }

    render() {
        return (
            <button onClick={this.handleVote}>
                {this.props.icon}{this.props.votes}
            </button>
        );
    }
}

export default SmileButton;