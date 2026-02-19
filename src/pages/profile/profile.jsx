import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'
import { useHero, useLogin } from "../../components/context"
import profilePhoto from '../../assets/Avatar Image.png'
import './profile.css'
import Swal from 'sweetalert2'

export default function Profile() {
    const { setHeroHeight } = useHero()
    const { setIsLoggedIn } = useLogin()
    const [user, setUser] = useState(null)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
    })
    const navigate = useNavigate()

    useEffect(() => {
        setHeroHeight("half")
        return () => setHeroHeight("full")
    }, [])

    useEffect(() => {
        setIsLoggedIn(true)
        return () => setIsLoggedIn(false)
    }, [])

    useEffect(() => {
        const token = Cookies.get("token")
        const fetchUser = async () => {
            try {
                const res = await fetch('https://dummyjson.com/auth/me', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                })
                const data = await res.json()
                if (res.ok) {
                    setUser(data)
                    setFormData({
                        firstName: data.firstName || "",
                        lastName: data.lastName || "",
                        email: data.email || "",
                        phone: data.phone || "",
                        address: { address: data.address?.address || "" }
                    })

                } else {
                    navigate('/login')
                }
            } catch (error) {
                console.log(error)
                navigate("/login")
            }
        }
        fetchUser()
    }, [navigate])

    if (!user) {
        return <p>loading...</p>
    }
    return (
        <>
            <div className="profile">
                <img src={profilePhoto} alt="" />
                <form>
                    <h3>General information</h3>
                    <div>
                        <div className="name">
                            <div>
                                <label>First Name</label>
                                <input
                                    type="text"
                                    value={formData.firstName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, firstName: e.target.value })
                                    }
                                />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, lastName: e.target.value })
                                    }
                                />
                            </div>
                        </div>
                        <label>Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                        />
                        <label>Phone Number</label>
                        <input
                            type="text"
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                            }
                        />
                        <label>Address</label>
                        <input
                            type="text"
                            value={formData.address.address}
                            onChange={(e) =>
                                setFormData({ ...formData, address: e.target.value })
                            }
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() =>
                            Swal.fire({
                                title: 'Updated!',
                                text: 'Your information has been updated.',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            })
                        }
                    >
                        Update information
                    </button>

                </form>
            </div>
        </>
    )
}
