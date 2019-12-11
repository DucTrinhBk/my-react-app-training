import React from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom';
import MasterLayout from './layouts/master';
import Home from './pages/Home';
function App() {
  return (
    <MasterLayout>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </HashRouter>
    </MasterLayout>
  );
}

export default App;
