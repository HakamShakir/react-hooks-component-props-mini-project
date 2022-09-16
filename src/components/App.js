import React from "react";
import blogData from "../data/blog";
import Header from "./Header";

import ArticleList from "./ArticleList";
import About from "./About";

console.log(blogData);

function App() {
  const { posts } = blogData;

  return (
    <div className="App">
      <Header name={blogData.name} />
      <About about={blogData.about} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
