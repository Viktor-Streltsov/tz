import styles from '../blockName/BlockName.module.scss';

function BlockName() {
    return (
        <div>
            <h1 className={styles.nameHeader}>Do you want to Learn more <br/> About cryptocurrencies <br/> <span className={styles.textColor}>quickly and easily ?</span></h1>
            <p className={styles.textHeader}>Subscribe to our channel to learn more</p>
            <ul className={styles.blockList}>
                <li>
                    <div className={styles.numK}>20k+</div>
                    <div className={styles.textNum}>subscribers</div>
                </li>
                <li>
                    <div className={styles.numK}>19,5K</div>
                    <div className={styles.textNum}>successful cases</div>
                </li>
                <li>
                    <div className={styles.numK}>4.8/5</div>
                    <div className={styles.textNum}>rating</div>
                </li>
            </ul>
            <a href='#' className={styles.blockBtn}>
                Join Whatsapp
            </a>
        </div>
    );
}

export default BlockName;
