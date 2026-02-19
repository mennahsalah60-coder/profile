import OurFeatures from '../../components/OurFeatures/features.jsx'
import './Home.css'
import RecommendedProducts from '../../components/RecommendedProducts/RecommendedProducts.jsx'

import shipp from '../../components/OurFeatures/images/shipping-fast 1.png'
import creditCard from '../../components/OurFeatures/images/credit-card-buyer 1.png'
import restock from '../../components/OurFeatures/images/restock 1.png'
import user from '../../components/OurFeatures/images/user-headset 1.png'

import book1 from '../../components/RecommendedProducts/images/book1.png'
import book2 from '../../components/RecommendedProducts/images/book2.png'
import rate from '../../components/RecommendedProducts/images/Frame 1000004764.png'

import { useHero } from '../../components/context.jsx'
import { useEffect } from 'react'

function InHome() {
    const { setHeroHeight } = useHero()

    useEffect(() => {
        setHeroHeight("full")
        return () => setHeroHeight("half")
    })
    return (
        <>
            <div>
                <input type="text" placeholder='Search' />
                <button>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_6473_1976)">
                            <path d="M21.7315 20.4353L16.2599 14.9637C17.751 13.1401 18.4841 10.8131 18.3076 8.46414C18.1311 6.11516 17.0585 3.92386 15.3117 2.34352C13.5648 0.763179 11.2774 -0.0853045 8.92255 -0.0264253C6.56768 0.0324538 4.32552 0.994191 2.65986 2.65986C0.994191 4.32552 0.0324538 6.56768 -0.0264253 8.92255C-0.0853045 11.2774 0.763179 13.5648 2.34352 15.3117C3.92386 17.0585 6.11516 18.1311 8.46414 18.3076C10.8131 18.4841 13.1401 17.751 14.9637 16.2599L20.4353 21.7315C20.6082 21.8984 20.8397 21.9908 21.0801 21.9888C21.3204 21.9867 21.5503 21.8903 21.7203 21.7203C21.8903 21.5503 21.9867 21.3204 21.9888 21.0801C21.9908 20.8397 21.8984 20.6082 21.7315 20.4353ZM9.16671 16.5C7.71632 16.5 6.29849 16.07 5.09253 15.2642C3.88657 14.4584 2.94664 13.313 2.39159 11.9731C1.83655 10.6331 1.69133 9.15858 1.97429 7.73605C2.25724 6.31352 2.95568 5.00685 3.98126 3.98126C5.00685 2.95568 6.31352 2.25724 7.73605 1.97429C9.15858 1.69133 10.6331 1.83655 11.9731 2.39159C13.313 2.94664 14.4584 3.88657 15.2642 5.09253C16.07 6.29849 16.5 7.71632 16.5 9.16671C16.4979 11.111 15.7245 12.975 14.3498 14.3498C12.975 15.7245 11.111 16.4979 9.16671 16.5Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_6473_1976">
                                <rect width="22" height="22" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </>
    )
}

export default function Home() {
    return (
        <>
            <div className="inhome">
                <InHome />
            </div>
            <div className={'features'}>
                <div className="feature">
                    <OurFeatures image={shipp} title="Fast & Reliable Shipping" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo." />
                </div>
                <div className="feature">
                    <OurFeatures image={creditCard} title="Secure Payment" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo." />
                </div>
                <div className="feature">
                    <OurFeatures image={restock} title="Easy Returns" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo." />
                </div>
                <div className="feature">
                    <OurFeatures image={user} title="24/7 Customer Support" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo." />
                </div>
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

export { InHome }