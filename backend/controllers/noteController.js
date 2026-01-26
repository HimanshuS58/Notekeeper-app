import Note from "../models/noteModel.js";

const createNote = async(req, res) => {

try{
    const { title, content } = req.body

     if(!title || !content) {
        res.status(400).json({message: "title & content fields are mandatory" })
     }

     const createNote = await Note.create({
        title,
        content
     })
 
    res.status(200).json(createNote)
}
catch(err){
    res.status(400).json({message: err.message})
}

}

const getAllNotes = async(req, res) => {
      try{
        const getAllNotes = await Note.find().sort({createdAt: -1})
        res.status(200).json(getAllNotes);
      }
      catch(err){
        res.status(400).json({message: err.message})
      }
}


const updateNote = async(req, res) => {
    try{
        const details = await Note.findById(req.params.id);
        if(!details){
            res.status(400).json({message: "No records are found"})
        }
  
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )

        res.status(200).json(updatedNote)

        }
    catch(err){
        res.status(400).json({message: err.message})
      }
}

const deleteNote = async(req, res) => {
    try{
       const deletedNote = await Note.findByIdAndDelete(req.params.id);
       if(!deletedNote){
        res.status(400).json({message: "No records are found"})
       }

       res.status(200).json({message: "Note deleted successfully"})
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

export { createNote, getAllNotes, updateNote, deleteNote }