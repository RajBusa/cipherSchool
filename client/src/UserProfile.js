import React from 'react'

const UserProfile = () => {
  return (
    <div className="w-100">
        <div className='d-flex '>
            <div className='profilePhoto '>
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    class="rounded-circle"
                    height="70"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                />
            </div>
            <div className=''>
                <p className='m-0'>Hello,</p>
                <p className='m-0'>Deep Shakhiya</p>
                <p className='m-0'>deepshakhiya1081992@gmail.com</p>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default UserProfile
