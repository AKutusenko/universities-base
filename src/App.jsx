import './App.css';
import { Route, Switch } from 'react-router';
import { lazy, Suspense } from 'react';
import { Home } from './components/pages/Home/Home';
import { Faculties } from './components/pages/Faculties/Faculties';
import { Cities } from './components/pages/Cities/Cities';
// import { Faculty } from './components/pages/Faculty/Faculty';
import { NotFound } from './components/pages/NotFound/NotFound';
import { Sidebar } from './components/Sidebar/Sidebar';
import { routes } from './utils/routes';

const Faculty = lazy(() => import('./components/pages/Faculty/Faculty'));

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
      <Suspense fallback={<div>ИДет загрузка...</div>}>
        <Switch>
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.faculties} exact component={Faculties} />
          <Route path={routes['faculties.id']} component={Faculty} />
          <Route path={routes.cities} exact component={Cities} />

          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
}
