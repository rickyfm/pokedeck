import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './containers/Home';
import Detail from './containers/Detail';
import PokemonProvider from './contexts/pokemon/Provider';

function App() {
  return (
    <Router>
      <div>
        <PokemonProvider>
        <Switch>
          <Route path="/detail/:name">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </PokemonProvider>
      </div>
    </Router>
  );
}

export default App;
