import ReactMarkdown from "react-markdown";
import Image from "next/image";
import classes from "./PostContent.module.css";
import PostHeader from "./PostHeader";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
// import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
// import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'


// SyntaxHighlighter.registerLanguage('js', js)
// SyntaxHighlighter.registerLanguage('css', css)

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customComponents = {
    p(paragraph) {
      const { node } = paragraph;
      console.log(node); 
      if (
        node.type === "element" &&
        node.tagName === "p" &&
        node.children[0].type === "element" &&
        node.children[0].tagName === "img"
      ) {
        const image = node.children[0];
        const alt = image.properties.alt || "";
        console.log(image);
        return (
          <div className={classes.image}>
            {/*
              <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={alt}
              width={600}
              height={300}
            />
          */}
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },

    code({ className, children }) {
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
         
        >
          {children}
        </SyntaxHighlighter>
      );
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
