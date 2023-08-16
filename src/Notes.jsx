import React, {useState, useEffect} from 'react'
import NoteSidebar from './components/NoteSidebar'
import { nanoid } from 'nanoid'
import NotesEditor from './components/NotesEditor'
import Split from 'react-split'

const Notes = () => {
    const [notes, setNotes] = useState(() => {
        return JSON.parse(localStorage.getItem("notes")) || [];
      })

    const [currNoteId, setCurrNoteId] = useState(notes[0] && notes[0].id || "");
    
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
      }, [notes]);

      function createNewNote() {
        const newNote = {
          id: nanoid(),
          body: "# Type your markdown note's title here",
        };
        setNotes((prevNotes) => [newNote, ...prevNotes]);
        setCurrNoteId(newNote.id);
      }


      function updateNote(text) {
        setNotes((oldNotes) => {
          const newArray = [];
          for (let i = 0; i < oldNotes.length; i++) {
            const oldNote = oldNotes[i];
            if (oldNote.id === currNoteId) {
              newArray.unshift({ ...oldNote, body: text });
            } else {
              newArray.push(oldNote);
            }
          }
          return newArray;
        });
      }


      function deleteNote(event, noteId) {
        event.stopPropagation();
        setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
      }

      function findCurrentNote() {
        return (
          notes.find((note) => {
            return note.id === currNoteId;
          }) || notes[0]
        );
      }


  return (
    <div className='w-full'>
      <main>
        {notes.length > 0 ? (
          <Split sizes={[30, 70]} direction="horizontal" className="flex flex-row">
            <NoteSidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />
            {currNoteId && notes.length > 0 && (
              <NotesEditor currentNote={findCurrentNote()} updateNote={updateNote} />
            )}
          </Split>
        ) : (
          <div className="flex flex-col justify-center items-center h-screen w-full bg-slate-200">
            <h1 className='text-4xl mb-4 text-slate-950 uppercase'>You have no notes</h1>
            <button className="mt-4 p-4 bg-blue-800 rounded-md text-slate-100 uppercase" onClick={createNewNote}>
              Create one now
            </button>
          </div>
        )}
      </main>
      
    </div>
  )
}

export default Notes