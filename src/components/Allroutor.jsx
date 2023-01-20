import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Doctor_dashboard from './Doctor_dashboard'
import Home from './Home'

export default function Allroutor() {
  return (
    <div>
        
        <Router>
          
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/dash' element={< Doctor_dashboard />}></Route>
                
          </Routes>
        
       </Router>
    
     
      
    </div>
  )
}
