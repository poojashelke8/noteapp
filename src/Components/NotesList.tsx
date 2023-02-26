import * as React from 'react';
import Notes from './Notes';
import { note } from '../Modals/note.modal';


interface INotesListProps {
    notes: note[],
    setNotes: React.Dispatch<React.SetStateAction<note[]>>
}

const NotesList: React.FC<INotesListProps> = ({ notes,setNotes }) => {
    const handleDelete = (id: string) => {
        // console.log("notes Delted",id)
        setNotes(notes.filter(note => note.id !== id));
    }
    const renderNotes = ()=> {
        return notes.map(note => {
            return <Notes key={note.id} note={note} handleDelete={handleDelete}/>
        })
    }
    // handleDelete={ handleDelete }
    return (
        <>
            <h2 className="mt-3">Notes</h2>
            <div>{ renderNotes() }</div>
        </>
  );
};

export default NotesList;