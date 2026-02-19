import styles from './features.module.css'
// import { useState } from 'react';

function OurFeatures(props) {
    return (
        <div className={styles.features}>
            <div className={styles.feature}>
                <img src={props.image} alt="" />
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default OurFeatures