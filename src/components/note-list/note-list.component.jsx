import React from "react";
import { connect } from "react-redux";
import Note from "../note";
import { selectFilteredNoteList } from "../../store/item/item.selectors";

import "./note-list.styles.scss";

import { types } from './types';

const NoteList = ({ filteredList }) => {
  return (
    <ul className="note-list items-list">
      {
        filteredList.map(item => <Note note={item} key={item.id} />)
      }
    </ul>
  );
};

const mapStateToProps = state => ({
  filteredList: selectFilteredNoteList(state)
});

NoteList.propTypes = types;

export default connect(mapStateToProps)(NoteList);