import PropTypes from "prop-types";
import { useState } from "react";

function TextForm({ getAlert, mode = "light", title }) {
  const [text, setText] = useState("");
  const textCheck = () => {
    if (text.trim().length === 0) {
      getAlert("please enter some text first", "danger");
      return false;
    }
    return true;
  };
  const toUpperCase = (e) => {
    if (!textCheck()) return;
    let set = text.toUpperCase();
    getAlert("converted to uppercase", "success");
    setText(set);
  };
  const toLowerCase = (e) => {
    if (!textCheck()) return;
    let set = text.toLowerCase();
    getAlert("converted to lowercase", "success");
    setText(set);
  };
  const clearText = () => {
    if (!textCheck()) return;
    let set = "";
    getAlert("text has been cleared", "danger");
    setText(set);
  };
  const removeExtraSpaces = () => {
    if (!textCheck()) return;
    let set = text.replace(/\s+/g, " ").trim();
    getAlert("Extra spaces removed", "success");
    setText(set);
  };
  const toCapitalize = () => {
    if (!textCheck()) return;
    let set = text.replace(/\b\w/g, (ch) => ch.toUpperCase());
    getAlert("converted to capitalized", "success");
    setText(set);
  };
  return (
    <>
      <div
        className="container my-3"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <h2>{title}</h2>
        <div>
          <textarea
            className="form-control"
            id={`${
              mode === "dark"
                ? "successForPlaceholder"
                : "failureForPlaceholder"
            }`}
            value={text}
            rows={8}
            placeholder="Enter text here"
            onChange={(e) => {
              setText(e.target.value);
            }}
            style={{
              backgroundColor:
                mode === "light" ? "var(--bs-gray-100)" : "var(--bs-gray-800)",
              color: mode === "light" ? "black" : "white",
            }}
          ></textarea>
          {text.length}/{5000}
        </div>
        <button className="btn btn-primary mt-4 " onClick={toUpperCase}>
          To UpperCase
        </button>
        <button className="btn btn-primary mt-4 mx-3" onClick={toLowerCase}>
          To LowerCase
        </button>
        <button className="btn btn-primary mt-4 mx-3" onClick={toCapitalize}>
          To Capitalized
        </button>
        <button
          className="btn btn-success mt-4 mx-3"
          onClick={removeExtraSpaces}
        >
          Remove extra spaces
        </button>
        <button className="btn btn-danger mt-4 mx-3" onClick={clearText}>
          Clear text
        </button>
      </div>
      <div className="container">
        <h2>Text summary</h2>
        <p>
          Total characters :<b>{text.length}</b>
          &nbsp;&nbsp;&nbsp; Total words :
          <b>
            {
              text
                .trim()
                .split(/\s+/)
                .filter((word) => word.length > 0).length
            }
          </b>
          <br />
          <b>
            {0.008 *
              text
                .trim()
                .split(/\s+/)
                .filter((word) => word.length > 0).length}
          </b>
          &nbsp;Minutes to read
        </p>
        <h3>Preview</h3>
        <div
          className="container mb-4"
          style={{ maxWidth: "100%", wordBreak: "break-word" }}
        >
          <p style={{ opacity: text.length > 0 ? "1" : "0.7" }}>
            {text.length > 0 ? text : "Enter text above to preview it here"}
          </p>
        </div>
      </div>
    </>
  );
}

export default TextForm;

TextForm.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};
