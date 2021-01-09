
import React, {useEffect,useState} from 'react'

const Notes = () => {

        const [notes,setNotes] = useState([{
            title:"", content:""
        }])

        useEffect(() => {
          fetch("/notes").then(res=>{
              if(res.ok){return res.json()}
          }).then( data => setNotes(data))
        }, [])

    return (
        <div className="container">
            <h1>Notes page</h1>
            {
                notes.map((item)=>{
                    return <>
                     <h4 key={item.title}>Title: {item.title}</h4>
                      <p>Content: {item.content}</p>
                    </>
                   
                })
            }


        </div>
    )
}

export default Notes
