import { createContext, useContext, useState } from 'react'

const Hero = createContext(null)
const LoginContext = createContext(null)
export default function Context({ children }) {
    const [heroHeight, setHeroHeight] = useState("full")
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <div>
                <Hero.Provider value={{ heroHeight, setHeroHeight }}>
                    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
                        {children}
                    </LoginContext.Provider>
                </Hero.Provider>
            </div>
        </>
    )
}

export const useHero = () => useContext(Hero)
export const useLogin = () => useContext(LoginContext)
