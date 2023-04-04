import { useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import Hero from './components/landing/Hero'
import Home from './Pages/Home'


function App() {

  return (
    <div className="App bg-primary min-h-screen">
      {/*<Hero />*/}
      {/*Router Start!*/}
      <Router>
        {/*Pages Start!*/}
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          
        </Switch>
        {/*Pages End!*/}
      </Router>
      {/*Router end!*/}
    </div>
  )
}

export default App
