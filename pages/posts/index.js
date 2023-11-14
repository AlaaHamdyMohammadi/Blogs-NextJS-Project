import AllPosts from "../../components/posts/AllPosts"
import { getAllPosts } from "../../lib/posts-util";

// const DUMMY_POSTS = [
//   {
//     title: "NextJs1",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJs1",
//     date: "2022-02-10",
//     slug: "NextJs1",
//   },
//   {
//     title: "NextJs1",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJs1",
//     date: "2022-02-10",
//     slug: "NextJs2",
//   },
//   {
//     title: "NextJs1",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJs1",
//     date: "2022-02-10",
//     slug: "NextJs3",
//   },
// ];

function AllPostsPage(props) {
  const {posts} = props;
    return (
      <div>
        <AllPosts posts={posts} />
      </div>
    );
}

export function getStaticProps(){
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 5,
  };
}

export default AllPostsPage
