// /**
//  * Exercises from Dave Ceddia's [Pure React] Lesson 4: Fetch data from a server
//  * https://mail.google.com/mail/u/0/#label/Frontend%2FDave+Ceddia/FMfcgxvzKtTNdqTpMMFfkpPVGKVzqbzp
//  */
//
// import React, { Component } from "react";
// import axios from "axios";
//
// class Reddit extends Component {
//   state = {
//     posts: []
//   };
//
//   componentDidMount() {
//     axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
//       const posts = res.data.data.children.map(obj => obj.data);
//       this.setState({ posts });
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <h3>Reddit</h3>
//         <ul>
//           {this.state.posts.map(post => (
//             <li key={post.id}>
//               <a href={post.url}>{post.title}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
//
// export default Reddit;
