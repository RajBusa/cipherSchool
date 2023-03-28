import React from 'react'
import './CSS/OtherInfo.css'

const OtherInfo = () => {
  return (
    <>
      <div className="px-5" style={{ 'background-color': 'rgb(21 24 30)' }}>
        <div className="aboutme">
          <div className="d-flex justify-content-between align-items-center pt-4 pb-3">
            <div className="fw-semibold">ABOUT ME</div>
            <button
              className="btn btn-primary px-4 py-1"
              data-bs-toggle="modal"
              data-bs-target="#aboutme"
            >
              Edit
            </button>
          </div>
          <div
            className="rounded-3 py-2 px-3"
            style={{ 'background-color': '#262c36', height: '124px' }}
          >
            <p className="text-secondary">Add Something about you</p>
          </div>
        </div>
        <hr className="" />
        <div className="onTheWeb row">
          <div className="d-flex justify-content-between align-items-center pt-4 pb-3">
            <div className="fw-semibold">ON THE WEB</div>
            <button className="btn btn-primary px-4 py-1">Edit</button>
          </div>
          <div class="mb-0 col-md-4">
            <label for="linkedin" class="form-label mb-0">
              Linkedin
            </label>
            <div class="input-group mb-3">
              <span
                class="input-group-text border-0 bg-gray rounded-start-3"
                id="basic-addon1"
              >
                <img
                  src="https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg"
                  alt="linkedin"
                  class="linkedin"
                />
              </span>
              <input
                type="text"
                class="form-control shadow-none border-0 text-light placeholder-secondary rounded-end-3"
                id="linkedin"
                style={{ 'background-color': '#262c36' }}
                disabled
                readonly
                placeholder="Linkedin"
              />
            </div>
          </div>
          <div class="mb-0 col-md-4">
            <label for="linkedin" class="form-label mb-0">
              Github
            </label>
            <div class="input-group mb-3">
              <span
                class="input-group-text border-0 bg-gray rounded-start-3"
                id="basic-addon1"
              >
                <img
                  src="https://www.cipherschools.com/static/media/Github.2d6b6c0c10a3b3aa7e3c7438770688f8.svg"
                  alt="linkedin"
                  class="linkedin"
                />
              </span>
              <input
                type="text"
                class="form-control shadow-none border-0 text-light placeholder-secondary rounded-end-3"
                id="linkedin"
                style={{ 'background-color': '#262c36' }}
                disabled
                readonly
                placeholder="Github"
              />
            </div>
          </div>
          <div class="mb-0 col-md-4">
            <label for="linkedin" class="form-label mb-0">
              Facebook
            </label>
            <div class="input-group mb-3">
              <span
                class="input-group-text border-0 bg-gray rounded-start-3"
                id="basic-addon1"
              >
                <img
                  src="https://www.cipherschools.com/static/media/Facebook.766939726b802e2c4354f9629feba07f.svg"
                  alt="linkedin"
                  class="linkedin"
                />
              </span>
              <input
                type="text"
                class="form-control shadow-none border-0 text-light placeholder-secondary rounded-end-3"
                id="linkedin"
                style={{ 'background-color': '#262c36' }}
                disabled
                readonly
                placeholder="Facebook"
              />
            </div>
          </div>
          <div class="mb-0 col-md-4">
            <label for="linkedin" class="form-label mb-0">
              Twitter
            </label>
            <div class="input-group mb-3">
              <span
                class="input-group-text border-0 bg-gray rounded-start-3"
                id="basic-addon1"
              >
                <img
                  src="https://www.cipherschools.com/static/media/Twitter.8dec5dacebf84c0be8bcaa33dee4a7a0.svg"
                  alt="linkedin"
                  class="linkedin"
                />
              </span>
              <input
                type="text"
                class="form-control shadow-none border-0 text-light placeholder-secondary rounded-end-3"
                id="linkedin"
                style={{ 'background-color': '#262c36' }}
                disabled
                readonly
                placeholder="Twitter"
              />
            </div>
          </div>
          <div class="mb-0 col-md-4">
            <label for="linkedin" class="form-label mb-0">
              Instagram
            </label>
            <div class="input-group mb-3">
              <span
                class="input-group-text border-0 bg-gray rounded-start-3"
                id="basic-addon1"
              >
                <img
                  src="https://www.cipherschools.com/static/media/Instagram.31ac5927c40b6d948dc3369a313cb7c9.svg"
                  alt="linkedin"
                  class="linkedin"
                />
              </span>
              <input
                type="text"
                class="form-control shadow-none border-0 text-light placeholder-secondary rounded-end-3"
                id="linkedin"
                style={{ 'background-color': '#262c36' }}
                disabled
                readonly
                placeholder="Instagram"
              />
            </div>
          </div>
          <div class="mb-0 col-md-4">
            <label for="linkedin" class="form-label mb-0">
              Website
            </label>
            <div class="input-group mb-3">
              <span
                class="input-group-text border-0 bg-gray rounded-start-3"
                id="basic-addon1"
              >
                <img
                  src="https://www.cipherschools.com/static/media/Website.cd72366beefca5afbc5259237cf87838.svg"
                  alt="linkedin"
                  class="linkedin"
                />
              </span>
              <input
                type="text"
                class="form-control shadow-none border-0 text-light placeholder-secondary rounded-end-3"
                id="linkedin"
                style={{ 'background-color': '#262c36' }}
                disabled
                readonly
                placeholder="Website"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="PROFESSIONAL INFORMATION">
          <div className="d-flex justify-content-between align-items-center pt-4 pb-3">
            <div className="fw-semibold">PROFESSIONAL INFORMATION</div>
            <button className="btn btn-primary px-4 py-1">Edit</button>
          </div>
          <div className="row">
            <div className="col-md-6 mb-2">
              <label class="form-label mb-0">Highest education</label>
              <select
                class="form-select form-select-sm border-0 shadow-none text-light"
                style={{ 'background-color': '#262c36' }}
              >
                <option selected>Select</option>
                <option value="1">Primary</option>
                <option value="2">Secondary</option>
                <option value="3">Higher Secondary</option>
                <option value="4">Graduation</option>
                <option value="5">Post Graduation</option>
              </select>
            </div>
            <div className="col-md-6 mb-2">
              <label class="form-label mb-0">What do you do currently?</label>
              <select
                class="form-select form-select-sm border-0 shadow-none text-light"
                style={{ 'background-color': '#262c36' }}
              >
                <option selected>Select</option>
                <option value="1">Schooling</option>
                <option value="2">Teaching</option>
                <option value="3">Job</option>
                <option value="4">Free</option>
              </select>
            </div>
          </div>
        </div>
        <hr />
        <div className="PasswordAndSecurity">
          <div className="d-flex justify-content-between align-items-center pt-4 pb-3">
            <div className="fw-semibold">PASSWORD & SECURITY</div>
            <button
              className="btn btn-primary px-4 py-1"
              data-bs-toggle="modal"
              data-bs-target="#passwordModal"
            >
              Edit
            </button>
          </div>
          <div>
            <input
              type="email"
              value=".................."
              class="form-control shadow-none border-0 text-light w-100 placeholder-secondary"
              id="email"
              style={{ 'background-color': 'rgb(38, 44, 54)' }}
              disabled
              readonly
            />
          </div>
        </div>
        <div className="INTERESTS pb-3">
          <div className="d-flex justify-content-between align-items-center pt-4 pb-3">
            <div className="fw-semibold">INTERESTS</div>
            <button
              className="btn btn-primary px-4 py-1"
              data-bs-toggle="modal"
              data-bs-target="#interestsModal "
            >
              Edit
            </button>
          </div>
          <div className="d-flex">
            <div className="bedge"> Web Development </div>
            <div className="bedge"> Programming </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal about me --> */}
      <div
        class="modal fade"
        id="aboutme"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content" style={{ 'background-color': '#262c36' }}>
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                About Me
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <textarea
                  class="form-control shadow-none border-0 text-white"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  style={{ 'background-color': '#15181e' }}
                ></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
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
      {/* <!-- Modal Password and sequrity --> */}
      <div
        class="modal fade"
        id="passwordModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div
            class="modal-content rounded-4 py-3 px-3"
            style={{ 'background-color': '#262c36' }}
          >
            <div class="modal-body">
              <div className="mb-2">
                <label for="currentPass" class="form-label mb-0">
                  Current Password
                </label>
                <input
                  type="password"
                  class="form-control border-0 shadow-none text-light placeholder-secondary"
                  placeholder="Current Password"
                  id="currentPass"
                  style={{ 'background-color': '#15181e' }}
                />
              </div>
              <div className="mb-2">
                <label for="newPass" class="form-label mb-0">
                  New Password
                </label>
                <input
                  type="password"
                  class="form-control border-0 shadow-none text-light placeholder-secondary"
                  placeholder="New Password"
                  id="newPass"
                  style={{ 'background-color': '#15181e' }}
                />
              </div>
              <div className="mb-2">
                <label for="cNewPass" class="form-label mb-0">
                  Confirm Password
                </label>
                <input
                  type="password"
                  class="form-control border-0 shadow-none text-light placeholder-secondary"
                  placeholder="Confirm Password"
                  id="cNewPass"
                  style={{ 'background-color': '#15181e' }}
                />
              </div>
            </div>
            <div class="d-flex justify-content-end px-3 pb-3">
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
      {/* <!-- Modal INTERESTS --> */}
      <div
        class="modal fade"
        id="interestsModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div
            class="modal-content rounded-4 py-3 px-3"
            style={{ 'background-color': '#262c36' }}
          >
            <div class="modal-body">
              <div className="row">
                <div className="col-6 mb-3">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="appDevelopment"
                    autocomplete="off"
                  />
                  <label class="btn btn-primary w-100 p-2" for="appDevelopment">
                    App Development
                  </label>
                </div>
                <div className="col-6 mb-3">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="webDevelopment"
                    autocomplete="off"
                  />
                  <label class="btn btn-primary w-100 p-2" for="webDevelopment">
                    Web Development
                  </label>
                </div>
                <div className="col-6 mb-3">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="gameDevelopment"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-primary w-100 p-2"
                    for="gameDevelopment"
                  >
                    Game Development
                  </label>
                </div>
                <div className="col-6 mb-3">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="dataStructure"
                    autocomplete="off"
                  />
                  <label class="btn btn-primary w-100 p-2" for="dataStructure">
                    Data Structures
                  </label>
                </div>
                <div className="col-6 mb-3">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="programming"
                    autocomplete="off"
                  />
                  <label class="btn btn-primary w-100 p-2" for="programming">
                    Programming
                  </label>
                </div>
                <div className="col-6 mb-3">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="machineLearning"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-primary w-100 p-2"
                    for="machineLearning"
                  >
                    Machine Learning
                  </label>
                </div>
                <div className="col-6 mb-3">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="dataScience"
                    autocomplete="off"
                  />
                  <label class="btn btn-primary w-100 p-2" for="dataScience">
                    Data Science
                  </label>
                </div>
                <div className="col-6 mb-3">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="others"
                    autocomplete="off"
                  />
                  <label class="btn btn-primary w-100 p-2" for="others">
                    Others
                  </label>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end px-3 pb-3">
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

export default OtherInfo
