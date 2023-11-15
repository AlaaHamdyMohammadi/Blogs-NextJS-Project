import Head from "next/head";
import FeaturedPosts from "../components/homePage/FeaturedPosts";
import Hero from "../components/homePage/Hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>Alaa' Blog</title>
        <meta name="description" content="I post about web development"/>
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 5,
  };
}

export default HomePage;
