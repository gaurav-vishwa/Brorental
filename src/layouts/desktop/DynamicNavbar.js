import React, { useEffect, useState } from 'react'
import PostLoginNavbar from './PostLoginNavbar'
import PreLoginNavbar from './PreLoginNavbar'
import { useLocation } from 'react-router-dom'

const DynamicNavbar = () => {
    const Location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    
    useEffect(() => {
        // const token = user?.accessToken
        // if (token) {
            setUser(JSON.parse(localStorage.getItem('user')))
        // }

    }, [Location])

    return (
        <>
            {
                user ? <PostLoginNavbar userDetails={user} /> : <PreLoginNavbar />
            }
        </>
    )
}

export default DynamicNavbar