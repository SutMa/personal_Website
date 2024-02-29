import styles from '../styles/education.module.css'


function Education(){
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.education}>
                    <h2>Education</h2>
                    <h3>Louisiana State University</h3>
                    <p>Bachelor of Science - BS, Computer Science</p>
                    <p>2021 - 2024</p>
                </div>

                <div className={styles.certs}>
                    <h2>Certifications</h2>
                    <a href="https://www.credly.com/badges/60505d08-310e-4b1c-9a0b-edf66c7a1b4a/linked_in_profile"><b>AWS</b> Certified Cloud Practioner</a><br></br>
                    <a href="https://www.credly.com/badges/f7d9f537-29c3-4531-9a1f-5dda38c14569/linked_in_profile"><b>AWS</b> Certified Solutions Architect - Associate</a>
                </div>
            </div>
        </div>
    )
}

export default Education;
