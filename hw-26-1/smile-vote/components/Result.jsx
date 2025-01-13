const Result = (props) => {
    const {showResult, winner} = props;

    if(!showResult) {
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

export default Result;