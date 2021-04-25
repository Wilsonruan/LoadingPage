import { Switch, Route } from 'react-router-dom'
import AboutMe from './aboutme';
import Home from "./home"
import Portfolio from './portfolio';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/aboutme" component={AboutMe} />
  </Switch>
)

export default Main; 