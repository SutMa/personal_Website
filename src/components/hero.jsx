import React, { useState, useEffect } from 'react';
import styles from '../styles/hero.module.css'; // Ensure your CSS is correctly linked
import mainPic from '../pictures/Software integration-bro.png';
import { Fade } from 'react-awesome-reveal'; // Importing Fade for text animation

function Hero() {
    const texts = ['Malay Sut', 'a Software Engineer', 'a Backend Engineer'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Cycle texts with an interval
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(intervalId);
    }, []);

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
                </div>
                <img id={styles.desktop} src={mainPic} alt="Software integration illustration" />
            </div>
        </div>
    );
}

export default Hero;
