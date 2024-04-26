import React from "react";
import blogData from "../data/blog";
import About from "../components/about";
import Header from "../components/header";
import ArticleList from "../components/articleList";


console.log(blogData);


function App() {

  
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About
        image="https://example.com/blog-logo.png"
        about={blogData.about}
      />
      <ArticleList posts={blogData.posts} />
    </div>
  );
  
}

export default App;

