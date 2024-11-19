import React from "react";
import ReactDOM from "react-dom";

// Komponen Message
class Message extends React.Component {
  render() {
    return (
      <div>
        <small>{this.props.sender}:</small>
        <p>{this.props.content}</p>
        <hr />
      </div>
    );
  }
}

// Menggunakan komponen Message
let Chat = () =>
  // <div>
  //   <Message sender="Dian" content="Hi, Apa kabar?" />
  //   <Message sender="Juan" content="Kabar Baik" />
  // </div>
  {
    return (
      <div>
        <Message sender="Dian" content="Hi, Apa kabar?" />
        <Message sender="Juan" content="Kabar Baik" />
      </div>
    );
  };

// Render komponen ke Real DOM
// ReactDOM.render(chat, document.getElementById("root"));
export default Chat;
