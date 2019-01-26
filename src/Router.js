import React from 'react'
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom'
import App from './App'
import Total from './Total'
import A from './pages/A/index'
import B from './pages/B/index'
import C from './pages/C/index'
import D from './pages/D/index'
import E from './pages/E/index'


class IRouter extends React.Component {
  render() {
    console.log(1)
    return (
      <Router>
            <Route path='/'  render={()=> 
                <App>
                  <Switch>
                      <Route path="/a" component={A} />
                      <Route path="/b" component={B} />
                      <Route path="/c" component={C}></Route>
                      <Route path="/e" component={D}></Route>
                      <Route path="/d" component={E}></Route>
                  </Switch>
                </App>
            } />
      </Router>
    ) 
  }
}

export default IRouter