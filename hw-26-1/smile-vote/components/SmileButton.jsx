const SmileButton = (props) => {
   const handleVote = () => {
        props.onVote(props.smileName);
    }

    return (
        <button onClick={handleVote}>
            {props.icon}{props.votes}
        </button>
    );
}

export default SmileButton;