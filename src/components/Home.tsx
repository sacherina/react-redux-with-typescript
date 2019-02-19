import * as React from 'react';

import { IHomeProps } from '../containers/Home';

const Home = (props: IHomeProps) => 
    <button onClick={props.onButtonClick}>
        Test button
    </button>;

export default Home;
