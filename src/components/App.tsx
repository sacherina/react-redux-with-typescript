import * as React from 'react';

import Header, { IHeaderProps } from '../container/Header';
import Routing from './Routing';
import Footer from '../container/Footer';
import { IAppProps } from '../container/App';

const App = (props: IAppProps) => {
    return (
        <div>
            <Header />
            <Routing />
            <Footer />
        </div>
        
    );
}

export default App;
