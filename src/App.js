import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
// import Home from './components/Home';
import Converter from './components/Converter'

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <Header/>
      </div>

      <Switch>
        <Route exact path="/">
          <Converter/>
        </Route>
        <Route exact path="/calculate">
          <Converter/>
        </Route>
      </Switch>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
