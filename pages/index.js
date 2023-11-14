import FeaturedPosts from "../components/homePage/FeaturedPosts";
import Hero from "../components/homePage/Hero";
import {getFeaturedPosts} from '../lib/posts-util';

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

function HomePage(props){
  const {posts} = props;
    return (
      <>
        <Hero />
        <FeaturedPosts posts={posts} />
      </>
    );
}

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 5,
  };
}

export default HomePage;