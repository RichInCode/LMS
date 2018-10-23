import "./style.css";

export default function toggleCptBotChat() {
  var element = document.getElementById("cpt-bot-iframe");
  var button = document.getElementById("cpt-bot-button");
  var icon = document.getElementById("cpt-bot-chat-icon");
  var xIcon = document.getElementById("cpt-bot-exit-icon");
  //var feedbackElement = document.getElementById("feedback-container");

  var isOpen = element.clientHeight !== 0;
  if (isOpen) {
    element.style.height = "0px";
    element.style.width = "0px";
    element.style.borderRadius = "100px";
    feedbackElement.style.height = "0px";
    feedbackElement.style.width = "0px";
    feedbackElement.style.display = "none";
    button.style.bottom = "20px";
    xIcon.style.display = "none";
    icon.style.display = "block";
  } else {
    element.style.height = "490px";
    element.style.width = "480px";
    element.style.borderRadius = "0px";
    feedbackElement.style.height = "300px";
    feedbackElement.style.width = "400px";
    feedbackElement.style.display = "block";
    button.style.bottom = "520px";
    icon.style.display = "none";
    xIcon.style.display = "block";
  }
}

export function closeCptBotIframe() {
  var element = document.getElementById("cpt-bot-iframe");
  element.style.height = "0px";
  element.style.width = "0px";
  element.style.borderRadius = "100px";
}