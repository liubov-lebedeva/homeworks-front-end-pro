import {Component} from 'react';
import Button from "./Button.jsx";
import Result from "./Result.jsx";
import SmileList from "./SmileList.jsx";
import Header from "./Header.jsx";
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

    componentDidMount() {
        const savedSmiles = JSON.parse(localStorage.getItem('smileVotes'));
        if (savedSmiles) {
            this.setState({smiles: savedSmiles});
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
        }, () => {
            localStorage.setItem('smileVotes', JSON.stringify(this.state.smiles));
        });
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

        this.setState({
            showResult: true,
            winner: winner
        });

    }

    onClickClearResults = () => {
        const resetSmiles = this.state.smiles.map(smile => ({
            ...smile,
            votes: 0
        }));
        this.setState({
            smiles: resetSmiles,
            showResult: false,
            winner: null
        }, () => {
            localStorage.setItem('smileVotes', JSON.stringify(resetSmiles));
        });
    }


    render() {
        return (
            <div className="container">
                <Header title="Vote for the best emoji" />
                <SmileList smiles={this.state.smiles} onVote={this.updateSmileVote} />
                <div className="button-container">
                    <Button
                        text="Show results"
                        onClick={this.onClickShowResults}
                    />
                    <Button
                        text="Clear results"
                        onClick={this.onClickClearResults}
                    />
                </div>
                <Result
                    showResult={this.state.showResult}
                    winner={this.state.winner}
                />
            </div>
        )
    }
}

export default SmileVote;