import React, {useState} from 'react'

import axios from 'axios'



const CreateNote = () => {

const [input, setInput] = useState({
    title:"",
    content: ""
})



const handleChange = (e)=>{
           
            const {name, value} = e.target            
            // console.log(name,value);

            setInput(prevValues =>{
                        return {
                            ...prevValues,
                            [name]: value
                        }

            })


}



const handleClick = (e)=>{
    e.preventDefault()
    // console.log(input);
    const newNote = {
        title: input.title,
        content: input.content
    }

    // console.log("click",newNote);
        //send data to this route
    // axios.post("http://localhost:5000/create", newNote)
        axios.post("/create", newNote)



}


    const {title,content} = input

    return (
        <div className="container">

            <h1>Create note page</h1>

         
            <form>
                <div class="form-group">           
                <input type="text" value={title} onChange={handleChange} className="form-control" autoComplete="off" name="title" id="exampleInputEmail1"  placeholder="Enter title" />
                </div>

                <div class="form-group">           
                        <textarea onChange={handleChange} value={content} className="form-control"  autoComplete="off" name="content" id="" cols="" rows="" placeholder="Enter comments"></textarea> 
                </div>
 
               
                <button onClick={handleClick} className="btn btn-lg btn-info">ADD</button>              

            </form>       

        </div>
    )
}

export default CreateNote
