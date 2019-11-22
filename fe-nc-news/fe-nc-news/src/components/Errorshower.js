import React from "react";
import notfound from "../stylingpics/notfound.png";
import error400Badrequest from "../stylingpics/error400Badrequest.jpg";
import error500 from "../stylingpics/error500.png";

function Errors({ error }) {
  return (
    <div className="Errors">
      {error.status === 404 && <img src={notfound} alt="Not found" />}
      {error.status === 400 && (
        <img src={error400Badrequest} alt="Bad resquest" />
      )}
      {error.status === 500 && <img src={error500} alt="Internal error" />}
    </div>
  );
}

export default Errors;
