import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import About from './components/About/about';

//TODO: using lazy load, and component router later
// const About = React.lazy(() => import('./components/About/about'));

export const RouterBody: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" render={() => (<div>HOME COMPONENT</div>)}/>
        <Route exact path="/login" render={() => (<div>LOGIN COMPONENT</div>)}/>
        <Route exact path="/about" render={() => (<About title="About Component" description="This is example component using React"/>)}/>
      </Switch>
    </Router>
  )
}
