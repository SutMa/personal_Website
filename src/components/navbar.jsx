import styles from '../styles/navbar.module.css'
import logo from '../pictures/technology.png'
import moon from '../pictures/moon.png'

function Navbar(){
    return (
        <div className={styles.root}>
            
            <div id={styles.container}>
                <img id={styles.logo} src={logo} alt=""/>
          
                <ul>
                    <li>About</li>
                    <li>Resume</li>
                    <li>Contact</li>
                </ul>

               
            </div>
            
        </div>
    )
    
}


export default Navbar;
