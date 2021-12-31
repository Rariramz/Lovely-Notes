import React from "react";
import { Link } from "react-router-dom";

const NoteItem = (props) => {
  return (
    <>
      <li className="note">
        <div className="note-link">
          <div className="note-info">
            <h1>{props.header}</h1>
            <h5 className="note-text">{props.body}</h5>
          </div>
          {/* <figure className="img-wrapper" data-category={props.tag}>
            <img className="note-img" src={props.src} alt="Note image" />
          </figure> */}
        </div>
      </li>
    </>
  );
};

export default NoteItem;
