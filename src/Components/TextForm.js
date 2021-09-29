import PropTypes from "prop-types";
import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLpClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleOnChnage = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Your text Here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control my-3"
            value={text}
            onChange={handleOnChnage}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleLpClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <hr />
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
