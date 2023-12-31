// This package allaws us to read a markdown file and split it into metadata and the actual markdown content
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

//cwd => current working directory
const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles(){
    return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier){
    // To read a content into the file
    const postSlug = postIdentifier.replace(/\.md$/, ''); // To remove file extention
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content} = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content,
    }

    return postData;
}

export function getAllPosts(){
    // readdirSync: Will read all the contents synchronously(in blocking way)
    const postFiles = getPostsFiles();
    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((a, b) => a.date > b.date ? -1 : 1);
    return sortedPosts;
}

export function getFeaturedPosts(){
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post => post.isFeatured);
    return featuredPosts;
}