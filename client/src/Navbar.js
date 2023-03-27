import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar border border-buttom"
        style={{ 'background-color': 'rgb(40, 47, 58)' }}
        data-bs-theme="dark"
      >
        <div class="d-flex justify-content-between w-100">
          <a class="navbar-brand">Navbar</a>
          <div className="d-flex">
            <form class="d-flex mx-2" role="search">
              <div class="input-group">
                <span
                  class="input-group-text rounded-start-pill border-0"
                  style={{ 'background-color': '#15181e' }}
                >
                  <svg
                    width="17"
                    viewBox="0 0 28 28"
                    fill="none"
                    class="nav-search-icon-open"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26 26L20.3335 20.3234M23.4737 12.7368C23.4737 15.5844 22.3425 18.3154 20.3289 20.3289C18.3154 22.3425 15.5844 23.4737 12.7368 23.4737C9.88925 23.4737 7.1583 22.3425 5.14475 20.3289C3.1312 18.3154 2 15.5844 2 12.7368C2 9.88925 3.1312 7.1583 5.14475 5.14475C7.1583 3.1312 9.88925 2 12.7368 2C15.5844 2 18.3154 3.1312 20.3289 5.14475C22.3425 7.1583 23.4737 9.88925 23.4737 12.7368ZM23.4737 12.7368L23.4737 12.7368Z"
                      stroke="#eee"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Write your message"
                  className="form-control border-0 shadow-none"
                  style={{ 'background-color': '#15181e' }}
                />
                <span
                  class="input-group-text rounded-end-pill border-0"
                  style={{ 'background-color': '#15181e' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    className="text-light"
                    viewBox="0 0 20 16"
                    type="button"
                  >
                    <path
                      d="M6 16.0005C4.17526 16.0014 2.58119 14.7673 2.125 13.0005H0V11.0005H2.126C2.64564 8.98794 4.62012 7.70874 6.66928 8.05706C8.71845 8.40537 10.1594 10.2651 9.98486 12.3363C9.81035 14.4075 8.07856 16 6 16.0005ZM6 10.0005C4.9074 10.0016 4.01789 10.8793 4.00223 11.9718C3.98658 13.0643 4.85057 13.9672 5.94269 13.9996C7.03481 14.032 7.95083 13.182 8 12.0905V12.4905V12.0005C8 10.8959 7.10457 10.0005 6 10.0005ZM20 13.0005H11V11.0005H20V13.0005ZM11 8.00049C9.17563 8.00096 7.58209 6.76693 7.126 5.00049H0V3.00049H7.126C7.64564 0.987939 9.62012 -0.291258 11.6693 0.0570554C13.7184 0.405368 15.1594 2.26511 14.9849 4.33633C14.8103 6.40755 13.0786 7.99996 11 8.00049ZM11 2.00049C9.9074 2.0016 9.01789 2.87934 9.00223 3.97183C8.98658 5.06433 9.85056 5.9672 10.9427 5.99961C12.0348 6.03203 12.9508 5.18199 13 4.09049V4.49049V4.00049C13 2.89592 12.1046 2.00049 11 2.00049ZM20 5.00049H16V3.00049H20V5.00049Z"
                      fill="#eee"
                    />
                  </svg>
                </span>
              </div>
            </form>
            <div class="dropdown mx-2">
              <a
                class="btn dropdown-toggle border-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    My Profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Enrolled Courses
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Watchlist
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Liked Videos
                  </a>
                </li>
              </ul>
            </div>
            <button type="button" class="btn position-relative mx-2 border-0">
              <svg
                width="15"
                height="19"
                viewBox="0 0 20 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="nav-notification-icon"
                title="Notification"
              >
                <path
                  d="M19.0724 18.9615L17.4186 17.3077V10.8974C17.4186 6.96154 15.316 3.66667 11.6493 2.79487V1.92308C11.6493 0.858974 10.7904 0 9.72625 0C8.66215 0 7.80318 0.858974 7.80318 1.92308V2.79487C4.12369 3.66667 2.03395 6.94872 2.03395 10.8974V17.3077L0.380099 18.9615C-0.427593 19.7692 0.136509 21.1538 1.27753 21.1538H18.1622C19.316 21.1538 19.8801 19.7692 19.0724 18.9615ZM14.8545 18.5897H4.59805V10.8974C4.59805 7.71795 6.53395 5.12821 9.72625 5.12821C12.9186 5.12821 14.8545 7.71795 14.8545 10.8974V18.5897ZM9.72625 25C11.1365 25 12.2904 23.8462 12.2904 22.4359H7.16215C7.16215 23.1159 7.4323 23.7681 7.91316 24.249C8.39402 24.7299 9.04621 25 9.72625 25Z"
                  fill="#eee"
                ></path>
              </svg>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded"
                style={{ 'background-color': 'rgb(243 145 46)' }}
              >
                0<span class="visually-hidden">unread messages</span>
              </span>
            </button>
            <button
              type="button"
              class="btn border-0 mx-2"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="bottom"
              data-bs-content="Bottom popover"
            >
              <img
                src="https://www.cipherschools.com/static/media/WatchPoints.1caa87d88b88c0d4b4ee24fdd5b1db3f.svg"
                class="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </button>
            {/* <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
  <label class="form-check-label" for="flexSwitchCheckChecked"></label>
</div> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
