import './App.css';
import { Route, Switch } from 'react-router';
import { Home } from './components/pages/Home/Home';
import { Faculties } from './components/pages/Faculties/Faculties';
import { NotFound } from './components/pages/NotFound/NotFound';
import { Sidebar } from './components/Sidebar/Sidebar';
import { routes } from './utils/routes';

export default function App() {
  return (
    <div
      style={{
        display: ' flex',
        flexDirection: 'flex-start',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Sidebar />
      <Switch>
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.faculties} component={Faculties} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
