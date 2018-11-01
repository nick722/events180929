import React, { Component } from "react";
import axios from "axios";

class FetchTodosFromGoogleTasks extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get(`https://www.googleapis.com/auth/tasks`).then(response => {
      // const posts = response.data.data.children.map(obj => obj.data);
      // this.setState({ posts });
      //todo continue 1811011755
      const todos = response.items;
    });
  }

  render() {
    return (
      <div>
        <h3>Google Tasks</h3>
        {/*<ul>*/}
        {/*{this.state.posts.map(post => (*/}
        {/*<li key={post.id}>*/}
        {/*<a href={post.url}>{post.title}</a>*/}
        {/*</li>*/}
        {/*))}*/}
        {/*</ul>*/}
      </div>
    );
  }
}

export default FetchTodosFromGoogleTasks;
