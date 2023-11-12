import PostsGrid from '../posts/PostsGrid';
import classes from './FeaturedPosts.module.css';

function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>Featured posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts
