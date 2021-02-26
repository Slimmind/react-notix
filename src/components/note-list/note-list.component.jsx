import React from "react";
import "./note-list.styles.scss";

import Note from "../note";

const NoteList = (props) => (
    <ul className="note-list items-list">
        <Note />
    </ul>
);

export default NoteList;