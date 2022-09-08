import { getPosts } from "./script.js";
// import "..css/style.css";

const api_url = "https://api.jsonbin.io/v3/b/6309cb14e13e6063dc8e079d";

console.log("im here");

getPosts(api_url, (posts) => {
  console.log(posts);
  posts.forEach((post) => {
    document.getElementById("posts").innerHTML += post.Create();
  });
});

console.log("END");
