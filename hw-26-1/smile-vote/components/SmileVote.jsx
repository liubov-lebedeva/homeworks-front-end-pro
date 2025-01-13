import {useState, useEffect} from "react";
import Button from "./Button.jsx";
import Result from "./Result.jsx";
import Header from "./Header.jsx";
import SmileList from "./SmileList.jsx"
import "../src/App.css";

const SmileVote = () => {
    let initialSmiles = JSON.parse(localStorage.getItem('smiles'));
    if (!initialSmiles) {
        initialSmiles = [
            {name: "smile1", icon: "😀", votes: 0},
            {name: "smile2", icon: "😁", votes: 0},
            {name: "smile3", icon: "😂", votes: 0},
            {name: "smile4", icon: "🥰", votes: 0},
            {name: "smile5", icon: "😎", votes: 0},
        ];
    }
    const [smiles, setSmiles] = useState(initialSmiles);
    const [showResult, setShowResult] = useState(false);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        if (showResult) {
            const maxVotes = Math.max(...smiles.map((smile) => smile.votes));
            const winnerSmile = smiles.find((smile) => smile.votes === maxVotes);
            if (maxVotes === 0) {
                setWinner(null)
            } else setWinner(winnerSmile);
        } else {
            setWinner(null);
        }
        localStorage.setItem('winner', JSON.stringify(winner));
        localStorage.setItem('showResult', JSON.stringify(showResult));
    }, [showResult, smiles]);

    const handleVote = (name) => {
        setSmiles(smiles.map(smile => {
                if (smile.name === name) {
                    smile.votes++;
                }
                return smile;
            })
        );
        localStorage.setItem('smiles', JSON.stringify(smiles));
    };

    const handleClearResults = () => {
        setSmiles(smiles.map(smile => {
            smile.votes = 0;
            return smile;
        }));
        setShowResult(false);
        localStorage.setItem('smiles', JSON.stringify(smiles));
    };

    return (
        <div className="container">
            <Header title="Vote for the best emoji"/>
            <SmileList smiles={smiles} onVote={handleVote}/>
            <div className="button-container">
                <Button
                    text="Show results"
                    onClick={() => setShowResult(true)}
                />
                <Button
                    text="Clear results"
                    onClick={handleClearResults}
                />
            </div>
            <Result
                showResult={showResult}
                winner={winner}
            />
        </div>
    )
}
export default SmileVote;