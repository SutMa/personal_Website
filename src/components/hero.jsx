import React, { useState, useEffect } from 'react';
import styles from '../styles/hero.module.css'; // Ensure your CSS is correctly linked
import mainPic from '../pictures/Software integration-bro.png';
import { Fade } from 'react-awesome-reveal'; // Importing Fade for text animation
import github from '../pictures/github.png'
import linkedin from '../pictures/linkedin.png'

function Hero() {
    const texts = ['Malay Sut', 'a Software Engineer', 'a Backend Engineer'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Cycle texts with an interval
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000); // Change text every 3 seconds

        // Cleanup function to clear the interval
        return () => clearInterval(intervalId);
    }, [texts.length]); // Include texts.length to ensure useEffect responds to changes in texts array length

    return (
        <div className={styles.root} id='about'>
            <div className={styles.container}>
                <div className={styles.about}>
                    <h3>Welcome!</h3>
                    <h1>Hey, I'm 
                        <Fade triggerOnce={false} key={index}>
                            <span>{texts[index]}</span>
                        </Fade>
                    </h1>
                    <p id={styles.aboutP}>
                        I'm a Software Engineer at the LSU Dept. of Civil and Mechanical Engineering. I'm passionate about building scalable backend systems to meet the ever-growing demand of users. My work focuses on building backend systems for web applications.
                    </p>
                    <a href="https://github.com/SutMa" target="_blank"><img src={github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/sut/" target="_blank"><img src={linkedin} alt="" /></a>
                </div>
                <img id={styles.desktop} src={mainPic} alt="Software integration illustration" />
            </div>
        </div>
    );
}

export default Hero;
