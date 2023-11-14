import ReactMarkdown from "react-markdown";
import Image from "next/image";
import classes from "./PostContent.module.css";
import PostHeader from "./PostHeader";

// const DUMMY_POST = {
//     title: "NextJs1",
//     image: "getting-started-nextjs.png",
//     content: "# This is a first post",
//     date: "2022-02-10",
//     slug: "NextJs1",
//   }

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customComponents = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.properties.src}`}
    //       alt={image.src}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>
    },
   
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
