import PostItem from "./PostItem";
import classes from "./PostsGrid.module.css";

function PostsGrid({posts}) {
  return <ul className={classes.grid}>
    {posts.map((post) => <PostItem post={post} key={post.id}/>)}
  </ul>;
}

export default PostsGrid;
