import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
const about = () => <div>about</div>;

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <dive>
                    <Route exact={true} path={'/'} component={Home} />
                    <Route exact={true} path={'/about'} component={about} />
                </dive>
            </BrowserRouter>
        </div>
    );
};

export default App;
