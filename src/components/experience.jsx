import styles from '../styles/experience.module.css'


function Experience(){
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h1 style={{textAlign: `center`}}>Experience</h1>
                <div className={styles.exp}>
                    <div className={styles.exp1}>
                        <h3>Software Engineer Intern</h3>
                        <p id={styles.marginfix}>BRBytes</p>
                        <p>Aug 2022 - Dec 2022</p>
                        <p>Developed and optimized dynamic web applications with mobile first design principle to ensure users have easy access and utilization of the application on any device. Feutures CMS for lessons plans upload.</p>
                    </div>
                    <div className={styles.exp2}>
                        <h3>Software Engineer</h3>
                        <p id={styles.marginfix}>LSU Dept. of Construction Management</p>
                        <p>Jan 2023 - May 2023</p>
                        <p>Built and maintained API and PostgreSQL Database for collection and retrieval of physiological data across different devices to show how stress levels change based on environmental conditions.</p>
                    </div>
                    <div className={styles.exp3}>
                        <h3>Software Engineer</h3>
                        <p id={styles.marginfix}>LSU College of Engineering</p>
                        <p>Oct 2023 - Feb 2024</p>
                        <p>Collaboration with Cambridge University to develop customer-driven API for cement mixing, employing machine learning to produce accurate gauge factor and cement mixing ratios with models selected for publication.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience;
