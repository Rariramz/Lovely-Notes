import React, { useEffect, useState } from "react";
import NoteItem from "./NoteItem";
import "./Notes.css";
import { FiPlus } from "react-icons/fi";
import Form from "../Form/Form";
import img1 from "../../images/img-1.jpg";
import img9 from "../../images/img-9.jpg";
import img2 from "../../images/img-2.jpg";
import img3 from "../../images/img-3.jpg";
import img4 from "../../images/img-4.jpg";
import img8 from "../../images/img-8.jpg";
import { FiX } from "react-icons/fi";
import Minigrid from "minigrid";

const Notes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const notes = [
    {
      src: { img2 },
      header: "Note 1",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tag: "Adventure",
    },
    {
      src: { img3 },
      header: "Note 2",
      body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tag: "Adventure",
    },
    {
      src: { img4 },
      header: "Note 3",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      tag: "Adventure",
    },
    {
      src: { img8 },
      header: "Note 4",
      body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tag: "Adventure",
    },
    {
      src: { img9 },
      header: "Note 5",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tag: "Adventure",
    },
    {
      src: { img1 },
      header: "Note 6",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tag: "Adventure",
    },
  ];

  function modalClosed() {
    setIsModalOpen(false);
  }
  function newNote() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    const grid = new Minigrid({
      container: ".notes-container",
      item: ".note",
      gutter: 20,
    });
    grid.mount();
  }, []);

  return (
    <>
      <div className="notes">
        {!isModalOpen && (
          <button className="add-button" onClick={() => setIsModalOpen(true)}>
            ADD NOTE <FiPlus />
          </button>
        )}
        {isModalOpen && <Form onCancel={modalClosed} onDone={newNote} />}

        <div className="notes-container">
          {/* {notes.map((n) => (
            <NoteItem src={n.src} header={n.header} body={n.body} tag={n.tag} />
          ))} */}
          {notes.map((n) => (
            <div className="note">
              <button className="note-buttonDel" type="submit">
                <FiX />
              </button>
              <div className="note-info">
                <h1>{n.header}</h1>
                <h5 className="note-text">{n.body}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;
