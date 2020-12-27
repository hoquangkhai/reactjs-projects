import React, { useState } from "react";
import { Prompt } from "react-router-dom";

function Contact() {
  const [ischecked, setIsChecked] = useState(false);
  const handleClick = (boolean) => {
    setIsChecked(boolean);
  };

  return (
    <div>
      day la trang Contact
      <button className="btn--green" onClick={() => handleClick(false)}>
        Chuyen trang khong can hoi
      </button>
      <button className="btn--red" onClick={() => handleClick(true)}>
        Chuyen trang can thong bao truoc
      </button>
      <Prompt
        when={ischecked}
        message={(locaition) => `Ban co chac muon di den ${locaition.pathname}`}
      />
    </div>
  );
}

export default Contact;
