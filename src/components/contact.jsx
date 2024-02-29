import fishingPic from '../pictures/Fishing-amico.png'
import styles from '../styles/contact.module.css'


function Contact(){
    return (
        <div className={styles.root} id='contact'>
            <div className={styles.container}>
                <img src={fishingPic} className={styles.image} alt="" />
                <div className={styles.contact}>
                    <h2>Drop me a Line</h2>
                    <p>You can reach me via email at lamasut6@gmail.com</p>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;

