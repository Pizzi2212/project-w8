import User1 from '../img/avatar.png'

const Settings = () => {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col col-sm-11 col-md-9 col-lg-7 col-xl-6">
            <div className="row">
              <div className="col">
                <h1 className="fw-normal">Account</h1>
              </div>
            </div>
            <hr className="text-gray" />
            <div className="row pt-3">
              <div className="col-12 col-xl-4">
                <h6 className="fw-normal text-gray">
                  MEMBERSHIP &COPY; BILLING
                </h6>
                <button className="member p-2">Cancel Membership</button>
              </div>
              <div className="col-12 col-xl-8 d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between">
                  <h6>student@strive.school</h6>
                  <a className="text-decoration-none" href="#">
                    Change account email
                  </a>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="text-gray">Password:*****</h6>
                  <a className="text-decoration-none" href="#">
                    Change Password
                  </a>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h6>Phone: 355 788 9099</h6>
                  <a className="text-decoration-none" href="#">
                    Change Phone number
                  </a>
                </div>
                <hr className="text-gray" />
                <div className="d-flex align-items-center justify-content-between">
                  <h6>
                    <i className="bi bi-paypal"></i>PayPal admin@strive.school
                  </h6>
                  <a className="text-decoration-none" href="#">
                    Update payment info
                  </a>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h6></h6>
                  <a className="text-decoration-none" href="#">
                    Billing details
                  </a>
                </div>
                <hr className="text-gray" />
                <div className="d-flex align-items-center justify-content-between">
                  <h6></h6>
                  <a className="text-decoration-none" href="#">
                    Redeem gift card or promo code
                  </a>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h6></h6>
                  <a className="text-decoration-none" href="#">
                    Where to buy gift cards
                  </a>
                </div>
              </div>
              <hr className="text-gray" />
              <div className="row">
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fw-normal text-gray">PLAN DETAILS</h6>
                  <h6>
                    Premium <i className="bi bi-badge-hd"></i>
                  </h6>
                  <a className="text-decoration-none" href="#">
                    Where to buy gift cards
                  </a>
                </div>
                <hr className="text-gray" />
                <div className="row">
                  <div className="d-flex align-items-center justify-content-between">
                    <h6 className="fw-normal text-gray">SETTINGS</h6>
                    <ul>
                      <li className="list-group-item">
                        <a className="text-decoration-none" href="#">
                          Parental Controls
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a className="text-decoration-none" href="#">
                          Test participation
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a className="text-decoration-none" href="#">
                          Manage download devices
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a className="text-decoration-none" href="#">
                          Activate a device
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a className="text-decoration-none" href="#">
                          Recent device streaming activity
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a className="text-decoration-none" href="#">
                          Sign out of all devices
                        </a>
                      </li>
                    </ul>
                  </div>
                  <hr className="text-gray" />
                  <div className="d-flex align-items-center justify-content-between">
                    <h6 className="fw-normal text-gray">PLAN DETAILS</h6>
                    <h6>
                      <img src={User1} width="50px" alt="Avatar" />
                      Strive Student
                    </h6>
                    <a className="text-decoration-none" href="#">
                      Manage profiles
                    </a>
                  </div>

                  <div className="d-flex flex-column align-items-center justify-content-between">
                    <div className="d-flex justify-content-evenly">
                      <ul>
                        <li className="list-group-item">
                          <a className="text-decoration-none" href="#">
                            Add profile email
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a className="text-decoration-none" href="#">
                            Language
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a className="text-decoration-none" href="#">
                            Playback settings
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a className="text-decoration-none" href="#">
                            Subtitle appearance
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a className="text-decoration-none" href="#">
                            Viewing activity
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a className="text-decoration-none" href="#">
                            Ratings
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
