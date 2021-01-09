const express = require('express')

const router = express.Router()

const Note = require('../models/noteModel')

router.post("/create", async (req, res)=>{

    const title = req.body.title
    const content = req.body.content

    const newNote = new Note({
        title,
          content
    })
    
try{
    const savedPost = await newNote.save()  
   
     return res.json(savedPost)

} catch(err){
        console.log("err dw", err);
        return res.json({message: err})
    }

})

router.get("/notes", async (req, res)=>{

    
try{
    
    const posts = await Note.find()
    return  res.json(posts)


} catch(err){
        console.log("err dw", err);
        return res.json({message: err})
    }

})



// router.route("/create").post((req,res)=>{

//     console.log("dw body", req.body);
//     const title = req.body.title
//     const content = req.body.content
//     console.log(content);

//     const newNote = new Note({
//         title,
//          content
//     })
//         console.log("s", newNote);
//     try{
//              newNote.save()
//     }
//     catch(err){
//         console.log("DW ERR", err);
//     }
   
   


// })


module.exports = router