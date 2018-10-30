import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Projects from './containers/Projects';
import Contact from './containers/Contact';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <dive>
                    <Route exact={true} path={'/'} component={Home} />
                    <Route exact={true} path={'/about'} component={About} />
                    <Route
                        exact={true}
                        path={'/projects'}
                        component={Projects}
                    />
                    <Route exact={true} path={'/Contact'} component={Contact} />
                </dive>
            </BrowserRouter>
        </div>
    );
};

export default App;
