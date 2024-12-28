import {Component} from 'react';
import Smile from "./Smile.jsx";
import "../App.css";

class SmileVote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smiles: [
                {name: "smile1", icon: "😀", votes: 0},
                {name: "smile2", icon: "😁", votes: 0},
                {name: "smile3", icon: "😂", votes: 0},
                {name: "smile4", icon: "🥰", votes: 0},
                {name: "smile5", icon: "😎", votes: 0},
            ],
            showResult: false,
            winner: null
        }
    }

    updateSmileVote = (smileName) => {
        const newState = this.state.smiles.map((smile) => {
            if (smileName === smile.name) {
                smile.votes++;
            }
            return smile;
        });
        this.setState({
            smiles: newState
        })
    }

    onClickShowResults = () => {
        let maxValue = 0;
        let winner = null;
        for (let i = 0; i < this.state.smiles.length; i++) {
            if (this.state.smiles[i].votes > maxValue) {
                maxValue = this.state.smiles[i].votes;
                winner = this.state.smiles[i];
            }
        }

        if (winner) {
            this.setState({showResult: true, winner: winner});
        }
    }


    render() {
        let showResult;
        if (this.state.showResult && this.state.winner) {
            showResult = <div>
                <h2>Votes result:</h2>
                <h3>Winner:</h3>
                <div className="winner">{this.state.winner.icon}</div>
                <div>Votes amount: {this.state.winner.votes}</div>
            </div>
        } else if (this.state.showResult && !this.state.winner) {
            showResult = <div>No votes yet</div>
        }
        return (
            <div className="container">
                <h1>Vote for the best emoji</h1>
                <div className="emoji-container">
                    {this.state.smiles.map((smile) => {
                        return (
                            <button onClick={() => this.updateSmileVote(smile.name)}>{smile.icon}{smile.votes}</button>
                        )
                    })}
                </div>
                <button onClick={this.onClickShowResults}>Show results</button>
                {showResult}
            </div>
        )
    }
}

export default SmileVote;