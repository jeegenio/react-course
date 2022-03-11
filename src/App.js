import { Route, Switch } from 'react-router-dom';
import AllMeetupPage from './pages/AllMeetups'
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetups';
import MainNavigation from './components/layout/MainNavigation';


function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
      <Route path='/' exact>
      <AllMeetupPage />
      </Route>
      <Route path='/favorites'>
        <Favorites />
      </Route>
      <Route path='/new-meetups'>
        <NewMeetups />
      </Route>
      </Switch>
     
    </div>
  );
}

export default App;
