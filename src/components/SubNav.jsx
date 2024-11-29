import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { FaList, FaTh } from 'react-icons/fa'
import Anime from '../img/anime.jpg'
import Horror from '../img/horror.jpg'
import Romantic from '../img/romantic.jpg'
import Thriller from '../img/thriller.jpg'
import Drammatic from '../img/drammatic.jpg'

const TVShowsHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="d-flex flex-column flex-sm-row align-items-center">
      <h3 className="text-light">TV Shows</h3>

      <div className="dropdown">
        <a
          className="nav-link dropdown-toggle text-light m-5 border p-1"
          href="#"
          role="button"
          onClick={toggleDropdown}
        >
          Genres
        </a>
        <ul className={`dropdown-menu bg-dark ${isDropdownOpen ? 'show' : ''}`}>
          <li>
            <a className="dropdown-item text-light" href="#">
              Horror
              <img src={Horror} width="30px" alt="Horror" className="ms-2" />
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="#">
              Thriller
              <img
                src={Thriller}
                width="30px"
                alt="Thriller"
                className="ms-2"
              />
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="#">
              Romantic
              <img
                src={Romantic}
                width="30px"
                alt="Romantic"
                className="ms-2"
              />
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="#">
              Drammatic
              <img
                src={Drammatic}
                width="30px"
                alt="Drammatic"
                className="ms-2"
              />
            </a>
          </li>
          <li>
            <a className="dropdown-item text-light" href="#">
              Anime
              <img src={Anime} width="30px" alt="Anime" className="ms-2" />
            </a>
          </li>
        </ul>
      </div>

      <div className="d-none d-sm-block container">
        <div className="row">
          <div className="col text-end">
            <FaList className="text-light border p-1" size={24} />
            <FaTh className="text-light border p-1 ms-2" size={24} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TVShowsHeader
