import React from 'react'
import './CSS/UserProfile.css'

const UserProfile = () => {
    return (
        <>
            <div
                className="w-100 d-flex justify-content-between align-items-center px-5 pt-2 pb-3"
                style={{ 'background-image': "url('../img/ProfileCover.png')" }}
            >
                <div className="d-flex align-items-center">
                    <div className="profilePhoto pe-3">
                        <button
                            type="button"
                            class="btn position-relative border-0"
                            data-bs-toggle="modal"
                            data-bs-target="#personalInfo"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                class="rounded-circle"
                                height="70"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />
                            <span class="position-absolute top-100 start-50 translate-middle badge rounded-pill bg-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    fill="currentColor"
                                    class="bi bi-pencil-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                </svg>
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </button>
                    </div>
                    <div className="">
                        <p className="m-0 fs-5">Hello,</p>
                        <p className="m-0 fw-bold fs-5">Deep Shakhiya</p>
                        <p className="m-0 fs-6">deepshakhiya1081992@gmail.com</p>
                    </div>
                </div>
                <div>0 Followers</div>
            </div>
            {/* <!-- Modal user Profile    --> */}
            <div
                class="modal fade"
                id="personalInfo"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content rounded-4" style={{ 'background-color': '#262c36' }}>
                        <div class="d-flex justify-content-between p-3">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">
                                Profile Update
                            </h1>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <div className='d-flex w-100'>
                                <button
                                    type="button"
                                    class="btn position-relative border-0 w-25"
                                >
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                        class="rounded-circle"
                                        height="100"
                                        alt="Black and White Portrait of a Man"
                                        loading="lazy"
                                    />
                                    {/* <span class="position-absolute top-100 start-50 translate-middle badge rounded-pill bg-secondary">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            fill="currentColor"
                                            class="bi bi-pencil-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                        </svg>
                                        <span class="visually-hidden">unread messages</span>
                                    </span> */}
                                </button>
                                <div className='w-75'>
                                    <div class="mb-3">
                                        <label for="fname" class="form-label mb-0">First Name</label>
                                        <input type="text" class="form-control shadow-none border-0 text-light w-100 placeholder-secondary" id="fname" placeholder="First Name" style={{ 'background-color': '#15181e' }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="lname" class="form-label mb-0">Last Name</label>
                                        <input type="text" class="form-control shadow-none border-0 text-light w-100 placeholder-secondary" id="lname" placeholder="Last Name" style={{ 'background-color': '#15181e' }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label mb-0">Email Address</label>
                                        <input type="email" value="deepshakhiya1081992@gmail.com" class="form-control shadow-none border-0 text-light w-100 placeholder-secondary" id="email" style={{ 'background-color': '#15181e' }} disabled readonly />
                                    </div>
                                    <div class="mb-3">
                                        <label for="mnumber" class="form-label mb-0">Mobile Number</label>
                                        <input type="text" class="form-control shadow-none border-0 text-light w-100 placeholder-secondary" id="mnumber" placeholder="Mobile Number" style={{ 'background-color': '#15181e' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end p-3">
                            <button
                                type="button"
                                class="btn btn-secondary me-2"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" class="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile
