import React from 'react'
import OtherInfo from './OtherInfo'
import UserProfile from './UserProfile'

const Profile = () => {
  return (
    <div className='w-100 text-light' style={{ 'background-color': 'rgb(40, 47, 58)' }}>
        <UserProfile />
        <OtherInfo />
    </div>
  )
}

export default Profile
