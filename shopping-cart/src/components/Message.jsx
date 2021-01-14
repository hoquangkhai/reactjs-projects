import React from "react";

function Message(props) {
  const {message} = props
  return (
    <h3>
      <span className="badge amber darken-2">
        {message}
      </span>
    </h3>
  );
}

export default Message;
