import React from "react";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";

const NoteItem = (props) => {
  return (
    <>
      <div className="note">
        <button className="note-buttonDel" type="submit">
          <FiX />
        </button>
        <div className="note-info">
          <h1>{props.header}</h1>
          <h5 className="note-text">{props.body}</h5>
        </div>
        {/* <figure className="img-wrapper" data-category={props.tag}>
            <img className="note-img" src={props.src} alt="Note image" />
          </figure> */}
      </div>
    </>
  );
};

export default NoteItem;
