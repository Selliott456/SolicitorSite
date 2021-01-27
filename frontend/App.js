import React from 'react'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import './styles/style.scss'
import Arrears from './components/Arrears'
import Advice from './components/Advice'
import Becomelandlord from './components/Becomelandlord'
import Deposits from './components/Deposits'
import Discrimination from './components/Discrimination'
import Maintenance from './components/Maintenance'
import Signinglease from './components/Signinglease'
import Vetting from './components/Vetting'



// ! Some starter code for your frontends, change this
// ! however you like.
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/hello/world" component={MyPage} />
      <Route exact path="/arrears" component={Arrears} />
      <Route exact path="/advice" component={Advice} />
      <Route exact path="/becomelandlord" component={Becomelandlord} />
      <Route exact path="/deposits" component={Deposits} />
      <Route exact path="/discrimination" component={Discrimination} />
      <Route exact path="/maintenance" component={Maintenance} />
      <Route exact path="/signinglease" component={Signinglease} />
      <Route exact path="/vetting" component={Vetting} />
    </Switch>
  </BrowserRouter>
)

const Home = () => <Link to={'/hello/world'}>
  Go to /hello/world page.
</Link>

const MyPage = () => {
  return <p>
    Hello World
  </p>
}

export default App