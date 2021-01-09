import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Notes from './components/Notes.jsx';
import CreateNote from './components/CreateNote.jsx'



const App = () => {
     return (
            <Router>
                
                 <Navbar />
               
                          <Route exact path="/">
                                <Home />
                          </Route>

                          <Route  path="/notes">
                            <Notes />
                          </Route>

                          <Route  path="/create">
                            <CreateNote />
                          
                          </Route>
             
            </Router>
           



          )


}

export default App
