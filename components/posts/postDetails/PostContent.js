import ReactMarkdown from 'react-markdown';
import classes from './PostContent.module.css';
import PostHeader from './PostHeader';

// const DUMMY_POST = {
//     title: "NextJs1",
//     image: "getting-started-nextjs.png",
//     content: "# This is a first post",
//     date: "2022-02-10",
//     slug: "NextJs1",
//   }

function PostContent({post}) {
    const imagePath = `/images/posts/${post.slug}/${post.image}`;
    return (
      <article className={classes.content}>
        <PostHeader title={post.title} image={imagePath} />
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    );
}

export default PostContent
