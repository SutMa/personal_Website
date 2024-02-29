import styles from '../styles/navbar.module.css'
import logo from '../pictures/technology.png'
import  { HashLink as Link } from 'react-router-hash-link'

function Navbar() {
    return (
        <div className={styles.root} id='home'>
            {/* Hidden checkbox */}
            <input type="checkbox" id="nav-toggle" className={styles.navToggle} style={{display: 'none'}} />
            
            <div id={styles.container}>
                {/* Logo acting as a label for the checkbox */}
                
                
                <ul>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#work">Past Work</a></li>
                    <li><a href="/#experience">Resume</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}




export default Navbar;
