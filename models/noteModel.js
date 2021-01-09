const mongoose = require('mongoose')

const NotesSchema = mongoose.Schema({
          title: {type: String, trim:true},
          content: {type: String, trim:true}
    

})
//
const Note = mongoose.model('Notes', NotesSchema)
module.exports = Note