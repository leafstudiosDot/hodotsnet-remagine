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

function Prompt(props) {
    return (
        <span style={{
            zIndex: 100,
            display: props.enabled ? ('block') : ('none')
        }}>
            <div id="Modal-Container" className="Modal-Prompt"
                style={{
                    height: props.height + 'px'
                }}>
                <div id="Modal-Title">{props.title}</div>
                <div id="Modal-Description">{props.desc}</div>

                <div id="Modal-ButtonContainer">
                    {props.rejectText === "" || props.rejectText === null ? (null) : (<div id="Modal-ButtonReject" onClick={() => props.reject()}>{props.rejectText}</div>)}
                    {props.acceptText === "" || props.acceptText === null ? (null) : (<div id="Modal-ButtonAccept" onClick={() => props.accept()}>{props.acceptText}</div>)}
                </div>
            </div>
            <div className="Modal-BG" />
        </span>
    )
}

export { Prompt }