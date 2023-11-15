import Head from "next/head";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  const { posts } = props;
  return (
    <div>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming!" />
      </Head>
      <AllPosts posts={posts} />
    </div>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 5,
  };
}

export default AllPostsPage;
