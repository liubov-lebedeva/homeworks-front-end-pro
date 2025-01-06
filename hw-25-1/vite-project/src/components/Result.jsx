import {Component} from "react";

class Result extends Component {
    render() {
        const {showResult, winner} = this.props;

        if (!showResult) {
            return null;
        }

        return (
            <div>
                <h2>Votes result:</h2>
                {winner ? (
                    <>
                        <h3>Winner:</h3>
                        <div className="winner">{winner.icon}</div>
                        <div>Votes amount: {winner.votes}</div>
                    </>
                ) : (
                    <h2>No votes yet</h2>
                )}
            </div>
        );
    }
}

export default Result;