import styles from './RecommendedProducts.module.css'
import { useState } from 'react';
import heart from './images/heart (1) 1.png'
import fav from './images/favourite-svgrepo-com.png'

function RecommendedProducts(props) {
    const [isAdd, setIsAdd] = useState(false)
    const [isFav, setIsFav] = useState(false)

    return (
        <div className={styles.recommended}>
            <div className={styles.books}>
                <div className={styles.book}>
                    <div className={styles.image}>
                        <img src={props.image} alt="" />
                    </div>
                    <div>
                        <h4>{props.name}</h4>
                        <h5><span>Author: </span> {props.author}</h5>
                        <p>{props.descreption}</p>
                        <div className={styles.rate}>
                            <div>
                                <img src={props.stars} />
                                <p>({props.reviews} Reviews)</p>
                                <h5><span>Rate: </span> {props.rate}</h5>
                            </div>
                            <div className={styles.price}>${props.price}</div>
                        </div>
                        <div className={styles.buttons}>
                            <div className={`${styles.addToCard} ${isAdd ? styles.active : ''}`} onClick={() => setIsAdd(prev => !prev)}>
                                {isAdd ?
                                    <p>Remove From Card</p>
                                    :
                                    <p>Add To Card</p>
                                    
                                }
                            </div>
                            <div className={styles.fav} onClick={() => setIsFav(prev => !prev)}>
                                {isFav ?
                                    <img className={styles.heart} src={fav} alt="mm" />
                                    :
                                    <img className={styles.heart} src={heart} alt="mm" />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedProducts