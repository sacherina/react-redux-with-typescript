import * as React from 'react';

import { IHomeProps } from '../container/Home';

const Home = (props: IHomeProps) => {
    return (
        <button onClick={props.onButtonClick}>Test button
        </button>
    );
}

export default Home;
