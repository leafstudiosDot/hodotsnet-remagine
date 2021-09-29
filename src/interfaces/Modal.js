import { Component } from "react";
import './Modal.css';

/**
 * Prompt Window
 * @constructor
 * @param {string} title - Prompt Title.
 * @param {string} desc - Prompt Description.
 * @param {callback} accept - Accept Button Callback.
 * @param {string} acceptText - Accept Button Text.
 * @param {callback} reject - Reject Button Callback.
 * @param {string} rejectText - Reject Button Text.
 */
class Prompt extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <span style={{zIndex: 100}}>
                <div className="Modal-Prompt">
                    <div id="Modal-Title">{this.props.title}</div>
                    <div id="Modal-Description">{this.props.desc}</div>

                    <div id="Modal-ButtonContainer">
                        <div id="Modal-ButtonAccept" onClick={() => this.props.accept()}>{this.props.acceptText}</div>
                        <div id="Modal-ButtonReject" onClick={() => this.props.reject()}>{this.props.rejectText}</div>
                    </div>
                </div>
                <div className="Modal-BG" />
            </span>
        )
    }
}

export { Prompt }