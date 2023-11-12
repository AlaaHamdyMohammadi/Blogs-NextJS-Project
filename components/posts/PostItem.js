import Link from 'next/link';
import Image from 'next/image';
import classes from './PostItem.module.css';

function PostItem({post}) {
    const {title, image, excerpt, date, slug} = post;
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const imagePath = `/images/posts/${slug}/${image}`;
    return (
      <li className={classes.post}>
        <Link>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div className={classes.content}>
            <h3>Title: {title}</h3>
            <time>{formattedDate}</time>
            <p>The expert: {excerpt}</p>
          </div>
        </Link>
      </li>
    );
}

export default PostItem
