import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import CreateActivitie from './components/CreateActivitie/CreateActivitie';
import CountryDetail from './components/CountryCards/CountryDetails';
import LandingPage from './components/LandingPage/LandingPage'


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/country/create-tourist-activity" component={CreateActivitie} />
      <Route path='/country/detail/:id' component={CountryDetail}/>
      <Route path="/home/" component={Home} />   
    </div>
  );
}

export default App;
