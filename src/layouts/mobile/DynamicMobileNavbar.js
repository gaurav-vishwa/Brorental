import React, { useEffect, useState } from 'react'
import MobilePreLoginNavbar from './MobilePreLoginNavbar';
import MobilePostLoginNavbar from './MobilePostLoginNavbar';
import { useLocation } from 'react-router-dom';

const DynamicMobileNavbar = () => {
    const Location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    
    useEffect(() => {
            setUser(JSON.parse(localStorage.getItem('user')))

    }, [Location])

  return (
    <>
    {
        user ?<MobilePostLoginNavbar userDetails={user} /> : <MobilePreLoginNavbar />
    }
</>
  )
}

export default DynamicMobileNavbar