import React from 'react';

import Post from './Post';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <Post title="Reading about React" />
                <Post title="Practing React" />
                <Post title="Using React on Project" />
            </div>
        );
    }
}