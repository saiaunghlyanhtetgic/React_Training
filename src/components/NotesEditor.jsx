import React, {useState} from 'react'
import ReactMde  from 'react-mde'
import Showdown from 'showdown'
import "react-mde/lib/styles/css/react-mde-all.css";


const NotesEditor = ({currentNote, updateNote}) => {
    const [tab, setTab] = useState('write');

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  

  return (
    <section className="w-4/5 h-screen overflow-y-auto">
            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={tab}
                onTabChange={setTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits='vh'
                
            />
        </section>
  )
}

export default NotesEditor