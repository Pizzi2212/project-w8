import User1 from '../img/avatar.png'

const EditProfile = () => {
  return (
    <>
      <main className="d-flex justify-content-center align-items-center mt-5 pb-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col col-sm-11 col-md-9 col-lg-7 col-xl-6">
              <div className="row">
                <div className="col">
                  <h1 className="fw-normal text-light Profile">Edit Profile</h1>
                </div>
              </div>
              <hr className="text-gray" />
              <div className="row text-white pt-3">
                <div className="col-12 col-xl-3">
                  <img src={User1} width="150px" alt="Avatar" />
                </div>
                <div className="col-12 col-xl-8 d-flex flex-column">
                  <h5 className="bg-gray fw-normal p-2">Strive Student</h5>
                  <p>Language:</p>
                  <div className="dropdown">
                    <button
                      className="btn btn-black dropdown-toggle text-light border-light"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Italiano
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          English
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Deutsch
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Français
                        </a>
                      </li>
                    </ul>
                  </div>
                  <hr className="text-gray" />
                  <h5 className="fw-normal">Maturity Settings:</h5>
                  <a className="text-decoration-none text-light" href="#">
                    ALL MATURITY RATINGS
                  </a>
                  <p>Show titles of all maturity ratings for this profile.</p>
                  <button type="button" className="btn btn-outline-gray">
                    EDIT
                  </button>
                  <hr className="text-gray" />
                  <h5 className="fw-normal">Autoplay controls</h5>
                  <form className="d-flex flex-column">
                    <label className="text-light" htmlFor="autoplay-next">
                      <input type="checkbox" id="autoplay-next" />
                      Autoplay next episode in a series on all devices
                    </label>
                    <label className="text-light" htmlFor="autoplay-previews">
                      <input type="checkbox" id="autoplay-previews" />
                      Autoplay previews while browsing on all devices.
                    </label>
                  </form>
                </div>
              </div>
              <hr className="text-gray m-5" />
              <div className="row">
                <div className="d-md-flex justify-content-around text-center">
                  <button className="bg-light ps-5 pe-5 border-none">
                    SAVE
                  </button>
                  <button className="bg-netflix border border-secondary text-gray ps-5 pe-5">
                    CANCEL
                  </button>
                  <button className="bg-netflix border border-secondary text-gray ps-5 pe-5">
                    DELETE PROFILE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default EditProfile
