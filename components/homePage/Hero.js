import Image from 'next/image';
import classes from './Hero.module.css';

function Hero() {
    return (
        <section  className={classes.hero}>
        <div className={classes.image}>
        <Image src='/images/site/Me.jpeg' alt='My Image' width={300} height={300}/>
        </div>
        <h1>I'm Alaa</h1>
        <p>I blog about web development</p>            
        </section>
    )
}

export default Hero
