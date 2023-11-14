import PostContent from "../../components/posts/postDetails/postContent"
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailsPage(props) {
    const {post} = props;
    return (
        <PostContent post={post}/>
    )
}

export function getStaticProps(context){
    const {params} = context;
    const {slug} = params;

    const postData = getPostData(slug);
    return {
      props: {
        post: postData,
      },
      revalidate: 5,
    };
}

export function getStaticPaths(){
    const postFilenames = getPostsFiles();
    const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
    return{
        paths: slugs.map((slug) => ({params: {slug}})),
        fallback: 'blocking',
    }
}

export default PostDetailsPage
