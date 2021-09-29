import { Component } from "react";
import './Modal.css';

/**
 * Prompt Window
 * @constructor
 * @param {boolean} enabled - Prompt Appeared
 * @param {string} title - Prompt Title.
 * @param {string} desc - Prompt Description.
 * @param {callback} accept - Accept Button Callback.
 * @param {string} acceptText - Accept Button Text.
 * @param {callback} reject - Reject Button Callback.
 * @param {string} rejectText - Reject Button Text.
 * @param {number} height - Prompt Height.
 */
class Prompt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            started: 0,
        }
    }

    componentDidMount() {
        var scope = this;
        document.getElementById("Modal-Container").addEventListener("animationend", function() {
            scope.setState({started: scope.state.started + 1})
            if (scope.state.started === 3) {
                scope.setState({started: 1})
            }
        }, true);
    }

    commponentDidUnmount() {
        document.getElementById("Modal-Container").removeEventListener("animationend")
    }

    render() {
        return (
            <span style={{
                zIndex: 100,
                    display: this.state.started === 2 && !this.props.enabled  ? ('none') : ('block') 
                }}>
                <div id="Modal-Container" className="Modal-Prompt"
                style={{
                    height: this.props.height + 'px',
                    animationName: this.props.enabled ? ("ShowIn") : ("HideOut")
                }}>
                    <div id="Modal-Title">{this.props.title}</div>
                    <div id="Modal-Description">{this.props.desc}</div>

                    <div id="Modal-ButtonContainer">
                        <div id="Modal-ButtonReject" onClick={() => this.props.reject()}>{this.props.rejectText}</div>
                        <div id="Modal-ButtonAccept" onClick={() => this.props.accept()}>{this.props.acceptText}</div>
                    </div>
                </div>
                <div className="Modal-BG" style={{
                    animationName: this.props.enabled ? ("ShowInBG") : ("HideOutBG")
                }} />
            </span>
        )
    }
}

export { Prompt }