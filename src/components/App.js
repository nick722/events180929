import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import TodoList from '../containers/TodoList';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <TodoList/>
                </Layout>
            </div>
        );
    }
}

App.propTypes = {};

export default App;
