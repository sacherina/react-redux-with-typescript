import * as React from 'react';

import Header from '../containers/Header';
import Routing from './Routing';
import Footer from '../containers/Footer';

import { IAppProps } from '../containers/App';

const App = (props: IAppProps) => 
    <div>
        <Header />
        <Routing />
        <Footer />
    </div>;

export default App;
