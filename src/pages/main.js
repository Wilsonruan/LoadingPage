import { Switch, Route } from 'react-router-dom'
import Home from "./home"
import Portfolio from './portfolio';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/portfolio" component={Portfolio} />
  </Switch>
)

export default Main; 