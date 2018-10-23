import React, { Component } from 'react';
import toggleCptBotChat from "./ToggleCptBot";
//import { logUserFeedack } from "../services/DataService";
import "./botchat.css";
import "./style.css";
class CptChatBot extends Component {
    constructor(props) {
        super(props);
        this.state = { commentData : { comment: "", pmfKey: null }, messageInfo: null };
        this.handleCommentBox = this.handleCommentBox.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let { commentData } = this.state;
        commentData.pmfKey = nextProps.pmfKey;
        this.setState({ commentData })
    }

    handleCommentBox(event) {
        let { commentData } = this.state;
        commentData.comment = event.target.value;
        commentData.pmfKey = this.props.pmfKey;
        this.setState({ commentData })
    }

    handleSubmitClick(event) {
        this.setState({
            messageInfo: "sending"
        })
        let { commentData } = this.state;
        logUserFeedack(commentData)
        .then(res => {
            this.setState({
                messageInfo: "success"
            })
        })
        .catch(err => {
            console.log(err);
            this.setState({
                messageInfo: "error"
            })
        });
    }

    showMessages() {
        let element = null;
        let messageInfo = this.state.messageInfo;
        switch (messageInfo) {
            case "error" :
            element = <div id="error-message" className="text-danger">An error occurred submitting your comment </div>
                break;
            case "sending" :
                element = <div id="loading-message" className="text-info">Sending...</div>
                break;
            case "success" :
                element = <div id="success-message" className="text-success">Thanks for your comment!</div>
                break;
            default:
                break;
        }
        return element;
    }
    render() {
        return (
            <div>
                <a id="cpt-bot-button" onClick={toggleCptBotChat} className="cpt-bot-float">
                    <img id="cpt-bot-chat-icon" alt="help" title="Can I Help" src={require("../ChatBot.png")} />
                    <i id="cpt-bot-exit-icon" className="fas fa-times"></i>
                </a>
                <div id="feedback-container" className="card" style={{ display: "none" }}>
                    <div className="card-body">
                    <form>
                        <div className="form-group">
                        <label>Comment</label>
                        <textarea placeholder="How can we improve our Chat-Bot?" onChange={this.handleCommentBox} className="form-control" id="feedback" rows="5"></textarea>
                        </div>
                        {this.showMessages()}
                        <button id="submit-comments" onClick={this.handleSubmitClick} type="button" className="btn btn-primary float-right">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CptChatBot;
