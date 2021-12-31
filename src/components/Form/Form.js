import React, { useState } from "react";
import "./Form.css";
import { FiCheck, FiX } from "react-icons/fi";
import TextareaAutosize from "react-textarea-autosize";

const Form = ({ onCancel, onDone }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [tag, setTag] = useState("");
  const tags = ["none", "study", "work", "entertainment"]; //dummy tags

  const newNote = (header, body, tag) => {
    //wrapper("post", {header, body, tag})
    onDone();
  };

  return (
    <div className="form">
      <input
        className="form-header"
        name="header"
        placeholder="Введите заголовок"
        type="text"
      />
      <TextareaAutosize
        className="form-body"
        name="body"
        placeholder="Заметка..."
      />
      <div className="form-footer">
        <div className="form-footer-dropdown">
          <input
            className="dropdown-item-active"
            placeholder="None"
            value={tag}
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            readOnly="readonly"
          />
          {isDropdownVisible &&
            tags.map((t) => (
              <input
                className="dropdown-item"
                placeholder={t}
                onClick={() => (setTag(t), setIsDropdownVisible(false))}
                readOnly="readonly"
              />
            ))}
        </div>
        <div className="form-footer-buttons">
          <button className="form-submit-red" type="submit" onClick={onCancel}>
            <FiX />
          </button>
          <button className="form-submit-green" type="submit" onClick={newNote}>
            <FiCheck />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
