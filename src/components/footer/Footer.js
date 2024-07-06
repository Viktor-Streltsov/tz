import styles from './Footer.module.scss';
import iconOne from './icons/iconOne.png';
import iconTwo from './icons/iconTwo.png';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.blockAdd}>
                <div>
                    <img src={iconOne} alt='img'/>
                </div>
                <div>
                <p className={styles.textFooterOne}>get it on </p>
                <p className={styles.textFooterTwo}>Google play</p>
                </div>
            </div>
            <div className={styles.blockAdd}>
                <div>
                    <img src={iconTwo} alt='img'/>
                </div>
                <div>
                <p className={styles.textFooterOne}>Available on the</p>
                <p className={styles.textFooterTwo}>App Store</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
