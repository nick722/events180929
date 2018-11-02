import React, { Component } from "react";
import axios from "axios";

class FetchTodosFromTheServer extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    // axios;
    // .get(`https://api.rememberthemilk.com/services/rest/`)
    // .then(response => {
    // const  = response.data.data.children.map(obj => obj.data);
    // this.setState({ posts });
    //todo continue 1811011755
    fetch(
      // "https://api.rememberthemilk.com/services/rest/?method=rtm.tasks.getList&api_key=9432716fbee140b9fb9f8c4be30c6979&perms=delete",
      "https://api.rememberthemilk.com/services/rest/?method=rtm.tasks.getList&api_key=9432716fbee140b9fb9f8c4be30c6979&perms=delete",
      {
        method: "GET",
        api_key: "9432716fbee140b9fb9f8c4be30c6979",
        mode: "no-cors",
        format: "json"
      }
    ).then(response => {
      console.log("response>>>", response);
    });
  }

  render() {
    return (
      <div>
        <h3>Todos from the server:</h3>
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

export default FetchTodosFromTheServer;
