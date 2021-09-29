import { Component } from "react";
import './Modal.css';

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

                </div>
                <div className="Modal-BG" />
            </span>
        )
    }
}

export { Prompt }