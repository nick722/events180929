import React, { Component } from "react";
import PropTypes from "prop-types";

import Layout from "./Layout";
import TodoList from "../containers/TodoList";
import AddTodo from "../containers/AddTodo";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <AddTodo />
          <TodoList />
        </Layout>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
