import { Route, Switch } from 'react-router-dom';
import AllMeetupPage from './pages/AllMeetups'
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetups';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
