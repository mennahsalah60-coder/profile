import React from 'react'
import styles from './OurMission.module.css'

export default function OurMission(props) {
    return (
        <>
            <section className={styles.OurMission}>
                <div className={styles.Mission}>
                    <h3>{props.title}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris et ultricies est.
                        Aliquam in justo varius,
                        sagittis neque ut,
                        malesuada leo.Quality Selection Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,
                    </p>
                    <a href="">
                        View More
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.793 4.50063H0.5C0.367392 4.50063 0.240215 4.55331 0.146447 4.64708C0.0526785 4.74085 0 4.86802 0 5.00063C0 5.13324 0.0526785 5.26042 0.146447 5.35419C0.240215 5.44795 0.367392 5.50063 0.5 5.50063H9.793L6.146 9.14663C6.05211 9.24052 5.99937 9.36786 5.99937 9.50063C5.99937 9.63341 6.05211 9.76075 6.146 9.85463C6.23989 9.94852 6.36722 10.0013 6.5 10.0013C6.63278 10.0013 6.76011 9.94852 6.854 9.85463L11.354 5.35463C11.4006 5.30819 11.4375 5.25301 11.4627 5.19226C11.4879 5.13152 11.5009 5.0664 11.5009 5.00063C11.5009 4.93486 11.4879 4.86974 11.4627 4.809C11.4375 4.74825 11.4006 4.69308 11.354 4.64663L6.854 0.146631C6.76011 0.0527448 6.63278 0 6.5 0C6.36722 0 6.23989 0.0527448 6.146 0.146631C6.05211 0.240518 5.99937 0.367856 5.99937 0.500632C5.99937 0.633407 6.05211 0.760745 6.146 0.854632L9.793 4.50063Z" fill="#D9176C" />
                        </svg>
                    </a>
                </div>
            </section>
        </>
    )
}
