import RecommendedProducts from '../../components/RecommendedProducts/RecommendedProducts.jsx'
import './Book.css'

import book1 from '../../components/RecommendedProducts/images/book1.png'
import book2 from '../../components/RecommendedProducts/images/book2.png'
import rate from '../../components/RecommendedProducts/images/Frame 1000004764.png'


import { useHero } from '../../components/context.jsx'
import { useEffect } from 'react'

export default function Book() {
    const { setHeroHeight } = useHero()

    useEffect(() => {
        setHeroHeight("full")
        return () => setHeroHeight("half")
    })
    return (
        <>
            <div className='hero'>
                <h1>Our Books</h1>
            </div>
            <h2>Recommended For You</h2>
            <div className='books'>
                <RecommendedProducts
                    image={book1}
                    name="Rich Dad And Poor Dad"
                    author="Robert T. Kiyosanki"
                    descreption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,"
                    stars={rate}
                    reviews="180"
                    rate="4.2"
                    price="30.00"
                />

                <RecommendedProducts
                    image={book2}
                    name="The Design Of Books"
                    author="Debbie Berne"
                    descreption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,"
                    stars={rate}
                    reviews="210"
                    rate="4.2"
                    price="40.00"
                />
            </div>
        </>
    )
}
