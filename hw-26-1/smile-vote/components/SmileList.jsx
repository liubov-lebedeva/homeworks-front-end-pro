import SmileButton from "./SmileButton.jsx";

const SmileList = (props) => {
    return (
        <div className="emoji-container">
            {props.smiles.map((smile) => (
                <SmileButton
                    key={smile.name}
                    icon={smile.icon}
                    votes={smile.votes}
                    smileName={smile.name}
                    onVote={props.onVote}
                />
            ))}
        </div>
    );
}

export default SmileList;