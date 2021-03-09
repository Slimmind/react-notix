import React from "react";
import {connect} from "react-redux";
import Note from "../note";
import {selectFilteredNoteList} from "../../store/item/item.selectors";

import "./note-list.styles.scss";

const NoteList = (props) => {
    const {filteredList} = props;
    return (
        <ul className="note-list items-list">
            {
                filteredList.map(item => <Note note={item} key={item.id}/>)
            }
        </ul>
    );
};

const mapStateToProps = state => ({
    filteredList: selectFilteredNoteList(state)
})
export default connect(mapStateToProps)(NoteList);