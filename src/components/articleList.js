import Article from "../components/article"
import React from "react"

function ArticleList({posts}){
    return(
      <>
      <main>
      {posts.map((post) => (
          <Article
            key={post.id} 
            title={post.title}
            date={post.date}
            preview={post.preview}
          />
        ))}
      </main>
      </>
    )
  }

  export default ArticleList

