import ReactMarkdown from 'react-markdown';
import classes from './PostContent.module.css';
import PostHeader from './PostHeader';

const DUMMY_POST = {
    title: "NextJs1",
    image: "getting-started-nextjs.png",
    content: "# This is a first post",
    date: "2022-02-10",
    slug: "NextJs1",
  }

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
    return (
      <article className={classes.content}>
        <PostHeader title={DUMMY_POST.title} image={imagePath} />
        <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
      </article>
    );
}

export default PostContent
