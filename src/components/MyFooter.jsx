import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="d-xl-none mt-3">
        <FaFacebook className="text-gray fs-2 p-2 ms-5" />
        <FaInstagram className="text-gray fs-2 p-2" />
        <FaTwitter className="text-gray fs-2 p-2" />
        <FaYoutube className="text-gray fs-2 p-2" />
      </div>
      <div className="d-xl-none">
        <ul className="list-unstyled">
          <li className="p-2">
            <a className="text-white text-decoration-none m-3" href="#">
              Audio and Subtitles
            </a>
          </li>
          <li className="p-2">
            <a className="text-white text-decoration-none m-3" href="#">
              Media Center
            </a>
          </li>
          <li className="p-2">
            <a className="text-white text-decoration-none m-3" href="#">
              Privacy
            </a>
          </li>
          <li className="p-2">
            <a className="text-white text-decoration-none m-3" href="#">
              Contact Us
            </a>
          </li>
        </ul>
        <p className="text-light fs-6 d-xl-none ms-5">
          &copy;1997-{currentYear} Netflix, Inc.
        </p>
      </div>
      <div className="container d-none d-xl-block mt-5 p-5">
        <div className="row">
          <div className="mt-3">
            <FaFacebook className="text-light fs-1 p-2 ms-5" />
            <FaInstagram className="text-light fs-1 p-2" />
            <FaTwitter className="text-light fs-1 p-2" />
            <FaYoutube className="text-light fs-1 p-2" />
          </div>
          <div className="col d-md-flex flex-md-column">
            <ul className="list-unstyled">
              <li className="p-2">
                <a className="text-white text-decoration-none m-3" href="#">
                  Audio and Subtitles
                </a>
              </li>
              <li className="p-2">
                <a className="text-white text-decoration-none m-3" href="#">
                  Media Center
                </a>
              </li>
              <li className="p-2">
                <a className="text-white text-decoration-none m-3" href="#">
                  Privacy
                </a>
              </li>
              <li className="p-2">
                <a className="text-white text-decoration-none m-3" href="#">
                  Contact Us
                </a>
              </li>
              <li className="p-2">
                <a
                  className="text-white text-decoration-none border border-light p-1 m-3"
                  href="#"
                >
                  Service Code
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-unstyled">
              <li className="p-2">
                <a className="text-white text-decoration-none m-3" href="#">
                  Audio Description
                </a>
              </li>
              <li className="p-2">
                <a className="text-white text-decoration-none m-3" href="#">
                  Investor Relations
                </a>
              </li>
              <li className="p-2">
                <a className="text-white text-decoration-none m-3" href="#">
                  Legal Notices
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-unstyled">
              <li className="p-2">
                <a className="text-white text-decoration-none m-3" href="#">
                  Help Center
                </a>
              </li>
              <li className="p-2">
                <a className="text-white text-decoration-none m-3" href="#">
                  Jobs
                </a>
              </li>
              <li className="p-2">
                <a className="text-white text-decoration-none m-3" href="#">
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-unstyled">
              <li className="p-2">
                <a className="text-white text-decoration-none m-3" href="#">
                  Gift Card
                </a>
              </li>
              <li className="p-2">
                <a className="text-white text-decoration-none m-3" href="#">
                  Terms of Use
                </a>
              </li>
              <li className="p-2">
                <a className="text-white text-decoration-none m-3" href="#">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
          <p className="text-light fs-6 ms-5">
            &copy;1997-{currentYear} Netflix, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
