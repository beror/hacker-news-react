import React, { createContext, useReducer } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import MainTable from './MainTable';
import FloatingButton from './FloatingButton';
import rootReducer from './reducers';

const feedTypes = {
  NEWS: 'news',
  NEWEST: 'newest',
  SHOW: 'show',
  JOBS: 'jobs'
};

const MainTableContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(rootReducer, {
    [feedTypes.NEWS]: [],
    [feedTypes.NEWEST]: [],
    [feedTypes.SHOW]: [],
    [feedTypes.JOBS]: []
  });

  return (
    <MainTableContext.Provider value={{state, dispatch}}>
      <Router>
        <NavBar />
        <Route path={'/' + feedTypes.NEWS}>
          <MainTable apiUrl='https://api.hnpwa.com/v0/news/1.json' feedType={feedTypes.NEWS} />
        </Route>
        <Route path={'/' + feedTypes.NEWEST}>
          <MainTable apiUrl='https://api.hnpwa.com/v0/newest/1.json' feedType={feedTypes.NEWEST} />
        </Route>
        <Route path={'/' + feedTypes.SHOW}>
          <MainTable apiUrl='https://api.hnpwa.com/v0/show/1.json' feedType={feedTypes.SHOW} />
        </Route>
        <Route path={'/' + feedTypes.JOBS}>
          <MainTable apiUrl='https://api.hnpwa.com/v0/jobs/1.json' feedType={feedTypes.JOBS} />
        </Route>

        <FloatingButton />
      </Router>
    </MainTableContext.Provider>
  );
}

export default App;
export { MainTableContext, feedTypes };