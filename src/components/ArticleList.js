import Article from "./Article";

function ArticleList({ posts }) {
  //   const { title, date, preview } = post;
  const articleArr = [];
  posts.map((post) => {
    articleArr.push(
      <Article
        key={post.title}
        title={post.title}
        date={post.date}
        preview={post.preview}
      ></Article>
    );
  });

  return <main>{articleArr}</main>;
}

export default ArticleList;
