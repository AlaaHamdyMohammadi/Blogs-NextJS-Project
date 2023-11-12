import FeaturedPosts from "../components/homePage/FeaturedPosts";
import Hero from "../components/homePage/Hero";

const DUMMY_POSTS = [
  {
    title: "NextJs1",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs1",
    date: "2022-02-10",
    slug: "NextJs1",
  },
  {
    title: "NextJs1",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs1",
    date: "2022-02-10",
    slug: "NextJs2",
  },
  {
    title: "NextJs1",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs1",
    date: "2022-02-10",
    slug: "NextJs3",
  },
];

function HomePage(){

    return (
      <>
        <Hero />
        <FeaturedPosts posts={DUMMY_POSTS} />
      </>
    );
}

export default HomePage;