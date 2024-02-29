import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; // Base CSS
import "slick-carousel/slick/slick-theme.css"; // Theme CSS
import brbytes from '../pictures/work_portfolio/brbytes.png';
import cementai from '../pictures/work_portfolio/cementai.png';
import bubbleplot from '../pictures/work_portfolio/bubbleplot.png';
import ssm1 from '../pictures/work_portfolio/ssm1.png';
import ssm2 from '../pictures/work_portfolio/ssm2.png';
import styles from '../styles/work.module.css'

function Work() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2300, 
    };

    return (
        <div className={styles.root} id='work'>  
             <h2 className={styles.workT}>Past Work</h2>
            <div className={styles.container}>
            <Slider {...settings} className={styles.slider}>
                <img src={brbytes} alt="brbytes" />
                <img src={cementai} alt="cementai" />
                <img src={bubbleplot} alt="bubbleplot" />
                <img src={ssm1} alt="ssm1" />
                <img src={ssm2} alt="ssm2" />
            </Slider>
            </div>
        </div>
        
    );
}

export default Work;
