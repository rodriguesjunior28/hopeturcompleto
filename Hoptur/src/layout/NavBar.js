import { Link } from "react-router-dom";
import styles from '../layout/NavBar.module.css';


function NavBar () {
    return (
        <ul className={styles.site}>
            <li><Link to="/"><h1 className={styles.h1}>HopeTur</h1></Link></li>
            <li className={styles.list}><Link to="/Destino">Destino</Link></li>
            <li className={styles.list}><Link to="/Promocao">Promoção</Link></li>
            <li className={styles.list}><Link to="/Contato">Contato</Link></li>
        </ul>
        
    )
}

export default NavBar

