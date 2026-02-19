import './Login.css'

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useHero } from '../../components/context.jsx'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Cookies from 'js-cookie'
export default function Login() {
    const { setHeroHeight } = useHero()
    const navigate = useNavigate()

    useEffect(() => {
        setHeroHeight("half")
        return () => setHeroHeight("full")
    }, [])

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .min(8, 'Must be 8 characters at least')
                .required('Required'),
        }),
        onSubmit:
            async (values, { setSubmitting, setErrors }) => {
                try {
                    const res = await fetch('https://dummyjson.com/auth/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            username: 'emilys',
                            password: 'emilyspass'
                        }),
                    })
                    const data = await res.json()
                    if (!res.ok) {
                        setErrors({ api: data.message || "Login failed" })
                        return
                    }
                    if (data.accessToken) {
                        Cookies.set('token', data.accessToken)
                        navigate("/profile")
                    }

                } catch (err) {
                    console.log(err)
                    setErrors({ api: "wrong" })
                } finally {
                    setSubmitting(false)
                }
            }
    });




    return (
        <>
            <section className='login-form'>
                <h2>Welcome Back!</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <h3><label htmlFor="email">Email Address</label></h3>
                        <input
                            className='top'
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder='Enter Your Email'
                        />

                        {formik.touched.email && formik.errors.email ? (
                            <div className='error'>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div>
                        <h3><label htmlFor="password">Password Address</label></h3>
                        <input
                            className='top'
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            placeholder='Enter Your Password'
                        />

                        {formik.touched.password && formik.errors.password ? (
                            <div className='error'>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className='remember'>
                        <div>
                            <input type="checkbox" />
                            <p className='me'>Remember me</p>
                        </div>
                        <a href="">Forget password?</a>
                    </div>
                    <button className='logBtn' type="submit">Log in</button>
                    {formik.errors.api && (
                        <div className="error">{formik.errors.api}</div>
                    )}
                </form>

                <p className='sign'>Dont't have an account? <Link to="/signup">Signup</Link></p>
                <p className='or sign'>or</p>
                <div className='btns'>
                    <button>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_150_3768)">
                                <path d="M19.9905 10.1868C19.9905 9.36743 19.9224 8.76949 19.7752 8.14941H10.1992V11.8477H15.8201C15.7068 12.7668 15.0948 14.1509 13.7349 15.081L13.7159 15.2048L16.7436 17.4967L16.9534 17.5171C18.8798 15.7787 19.9905 13.2208 19.9905 10.1868Z" fill="#4285F4" />
                                <path d="M10.1992 19.9312C12.953 19.9312 15.2648 19.0453 16.9534 17.5173L13.7349 15.0812C12.8737 15.6681 11.7177 16.0777 10.1992 16.0777C7.50211 16.0777 5.21297 14.3393 4.39695 11.9365L4.27734 11.9464L1.12906 14.3271L1.08789 14.439C2.76508 17.6944 6.21016 19.9312 10.1992 19.9312Z" fill="#34A853" />
                                <path d="M4.39695 11.9363C4.18164 11.3163 4.05703 10.6518 4.05703 9.96535C4.05703 9.27878 4.18164 8.61443 4.38562 7.99435L4.37992 7.86229L1.19219 5.44336L1.08789 5.49183C0.396641 6.84275 0 8.35977 0 9.96535C0 11.5709 0.396641 13.0879 1.08789 14.4388L4.39695 11.9363Z" fill="#FBBC05" />
                                <path d="M10.1992 3.85336C12.1144 3.85336 13.4062 4.66168 14.1429 5.33718L17.0213 2.59107C15.2535 0.985496 12.953 0 10.1992 0C6.21016 0 2.76508 2.23672 1.08789 5.49214L4.38563 7.99466C5.21297 5.59183 7.50211 3.85336 10.1992 3.85336Z" fill="#EB4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_150_3768">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Login with Google
                    </button>
                    <button>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 10.0004C20 15.051 16.2562 19.2264 11.3926 19.904C10.9379 19.9671 10.4726 20 10.0004 20C9.45521 20 8.91988 19.9566 8.39856 19.8725C3.63662 19.1059 0 14.9774 0 10.0004C0 4.47746 4.47746 0 9.99965 0C15.5218 0 20 4.47746 20 10.0004Z" fill="#1877F2" />
                            <path d="M11.3925 8.02962V10.2081H14.0874L13.6607 13.1426H11.3925V19.9036C10.9378 19.9667 10.4725 19.9996 10.0003 19.9996C9.45511 19.9996 8.91978 19.9562 8.39846 19.8721V13.1426H5.91309V10.2081H8.39846V7.54263C8.39846 5.88899 9.73889 4.54785 11.3932 4.54785V4.54925C11.3981 4.54925 11.4023 4.54785 11.4073 4.54785H14.0881V7.08578H12.3364C11.8158 7.08578 11.3932 7.5083 11.3932 8.02892L11.3925 8.02962Z" fill="white" />
                        </svg>
                        Login with Facebook
                    </button>
                </div>
            </section>
        </>

    )
}
