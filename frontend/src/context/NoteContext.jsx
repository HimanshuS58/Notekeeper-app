import { createContext, useEffect, useState } from "react";
import BACKEND_URL from "../api/url";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {

    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

  // get all notes  
    const getAllNotes = async() => {

        setLoading(true)
        try {
            const response = await BACKEND_URL.get('/');
            setNotes(response.data);
        }
        catch(err) {
            console.error("Error in fetching details", err.message);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {

        getAllNotes();
    }, [])


   // create note
   const createNote = async(note) => {

    try {
    const createResponse = await BACKEND_URL.post('/', note);
    setNotes([...notes, createResponse.data]);
    }
    catch(err) {
        console.error("Error", err.message)
    }
   }

   // update note
   const updateNote = async(id, updatedNote) => {

    try {

        const updateResponse = await BACKEND_URL.put(`/${id}`, updatedNote);

        setNotes(notes.map((note) => (note._id == id ? updateResponse.data : note)))
    }
    catch(err) {
        console.error("Error in updating", err.message)
    }
   }

   // delete note
   const deleteNote = async(id) => {

    try {
        await BACKEND_URL.delete(`/${id}`);

        setNotes(notes.filter((note) => (note._id !== id)))
    }
    catch(err) {
         console.error("Error deleting", err.message)
    }
   }


    return (
        <NoteContext.Provider value={{notes, loading, createNote, updateNote, deleteNote}}>
            { children }
        </NoteContext.Provider>
    )
}