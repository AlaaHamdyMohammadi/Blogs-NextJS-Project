import AllPosts from "../../components/posts/AllPosts"
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

function AllPostsPage() {
    return (
      <div>
        <AllPosts posts={DUMMY_POSTS} />
      </div>
    );
}

export default AllPostsPage
