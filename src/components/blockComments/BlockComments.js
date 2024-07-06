import {data} from "./dataCommets/data";
import Bitcoin from './dataCommets/icons/Bitcoin.png';
import Ethereum from './dataCommets/icons/Ethereum.png';
import Litecoin from './dataCommets/icons/Litecoin.png';

import styles from './BlockComments.module.scss';


function BlockComments() {
    return (
        <>
            <img className={styles.bitcoin} src={Bitcoin} alt='img'/>
            <img className={styles.ethereum} src={Ethereum} alt='img'/>
            <img className={styles.litecoin} src={Litecoin} alt='img'/>
            <div className={styles.blockComments}>
                {data.map(elem => (
                    <div key={elem.id}
                         className={`${styles.blockProfile} ${elem.id === 2 || elem.id === 4 ? styles.marginLeft : ''}`}>
                        <div className={styles.profile}>
                            <div className={styles.imgProfile}>{elem.img}</div>
                            <div>
                                <p className={styles.name}>{elem.name}</p>
                                <p className={styles.email}>{elem.email}</p>
                            </div>
                        </div>
                        <p className={styles.textProfile}>{elem.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default BlockComments;
