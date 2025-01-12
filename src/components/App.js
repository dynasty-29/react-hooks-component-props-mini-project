import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Article from "./Article";
import ArticleList from "./ArticleList";

console.log(blogData);
const blogName = "My Blog";
const blogAbout = "Welcome to my blog where I share amazing content!";
const posts = [
{ id: 1, title: "Post 1", date: "March 3, 2023", preview: "This is the first post.", minutes: 8 },
{ id: 2, title: "Post 2", preview: "Here's something interesting.", minutes: 25 },
{ id: 3, title: "Post 3", date: "May 5, 2023", preview: "Another fascinating read.", minutes: 45 },
];
function App() {
  return (
    <div className="App">
      <Header name={blogName}/>
      <About image={undefined} about={blogAbout}/>
      <Article />
      <ArticleList posts={posts} />
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
