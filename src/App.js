import Academics from './compoenents/academics/Academics';
import Navigationbar from './compoenents/academics/Navigationbar';
import Home from '../src/compoenents/Home/Home';
import Footer from './compoenents/Home/Footer/Footer';
import Industry from './compoenents/Industry/Industry';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Program1 from './compoenents/Programs/Program1';
import Ourblogs from './compoenents/Blog/Ourblogs';
import About from './compoenents/About/About';
import Industries from './compoenents/Industry/Industries';
function App() {
  return (
    <>
      <Router>
        <Navigationbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/academics" component={Academics} />
          <Route path="/individual" component={Program1} />
          <Route path="/blog" component={Ourblogs} />
          <Route path="/leadership" component={About} />
          <Route path="/industry" component={Industries} />
        </Switch>

        {/* <Academics/> */}

        <Footer />
      </Router>
    </>
  );
}

export default App;
