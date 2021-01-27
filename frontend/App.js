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
      <Route exact path="" component={} />
      <Route exact path="" component={} />
      <Route exact path="" component={} />
      <Route exact path="" component={} />
      <Route exact path="" component={} />
      <Route exact path="" component={} />
      <Route exact path="" component={} />
      <Route exact path="" component={} />
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