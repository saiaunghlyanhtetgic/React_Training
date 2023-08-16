import React from 'react'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NoteSidebar = ({notes, currentNote, setCurrentNoteId, newNote, deleteNote}) => {
    function getTitleNote(noteBody) {
        const titleNote = noteBody.split("\n")[0].replace(/[^a-z0-9 -]/gi, "");
        return titleNote;
      }

      const noteElements = notes.map((note, index) => (
        <div key={note.id}>
          <div
            className={`overflow-hidden w-full cursor-pointer mt-2 px-2 flex justify-between items-center ${
              note.id === currentNote.id ? "bg-blue-500" : ""
            }`}
            onClick={() => setCurrentNoteId(note.id)}
          >
            <h4 className="p-1 text-sm font-normal leading-[1.2rem] text-slate-100 whitespace-nowrap overflow-hidden overflow-ellipsis">{getTitleNote(note.body)}</h4>
            <button
              className=""
              onClick={(event) => deleteNote(event, note.id)}
            >
                <FontAwesomeIcon icon={faTrashCan}/>
            </button>
          </div>
        </div>
      ));

  return (
    <section className="w-1/5 overflow-y-auto h-screen bg-slate-600">
    <div className="flex justify-around items-center">
      <h3 className='text-4xl mt-2 text-slate-100'>Notes</h3>
      <button className="w-8 h-8 bg-blue-700 rounded-md mt-2 text-slate-100" onClick={newNote}>
        +
      </button>
    </div>
    {noteElements}
  </section>
  )
}

export default NoteSidebar