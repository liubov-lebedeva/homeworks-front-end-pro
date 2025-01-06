import {Component} from 'react';
import SmileButton from './SmileButton.jsx';

class SmileList extends Component {
    render() {
        return (
            <div className="emoji-container">
                {this.props.smiles.map((smile) => (
                    <SmileButton
                        key={smile.name}
                        icon={smile.icon}
                        votes={smile.votes}
                        smileName={smile.name}
                        onVote={this.props.onVote}
                    />
                ))}
            </div>
        );
    }
}

export default SmileList;