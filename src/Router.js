import React from 'react'
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom'
import App from './App'
import Total from './Total'
import A from './pages/A'
import B from './pages/B'
import C from './pages/C'
import D from './pages/D'
import E from './pages/E'


class IRouter extends React.Component {
  render() {
    console.log(1)
    return (
      <Router>
          <Total>
            <Route path='/home' render={()=> 
                <App>
                <Switch>
                    <Route path="/home/a" component={A} />
                    <Route path="/home/b" component={B} />
                    <Route path="/home/c" component={C}></Route>
                    <Route path="/home/d" component={D}></Route>
                    <Route path="/home/e" component={E}></Route>
                    <Redirect to="/home/a" />
                </Switch>
                </App>
            }/>
          </Total>

      </Router>
    ) 
  }
}

export default IRouter