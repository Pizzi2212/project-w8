import React, { useEffect, useState } from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'

const FilmCarousel1 = ({ searchQuery }) => {
  const [films1, setFilms1] = useState([])

  useEffect(() => {
    if (!searchQuery) return

    fetch(`http://www.omdbapi.com/?apikey=47ad4fc&s=${searchQuery}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        } else {
          throw new Error('Errore nella chiamata')
        }
      })
      .then((data) => {
        if (data.Search) {
          setFilms1(data.Search)
        }
      })
      .catch((e) => {
        console.error('Errore!', e)
      })
  }, [searchQuery])
  const chunks = []
  for (let i = 0; i < films1.length; i += 6) {
    chunks.push(films1.slice(i, i + 6))
  }

  return (
    <div className="bg-container">
      <h1 className="text-white text-start">
        Risultati della ricerca per "{searchQuery}"
      </h1>
      <Carousel interval={null}>
        {chunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <Row>
              {chunk.map((film) => (
                <Col
                  key={film.imdbID}
                  xs={6}
                  sm={4}
                  md={3}
                  lg={2}
                  className="mb-4"
                >
                  <img
                    className="img-fluid custom-image"
                    src={film.Poster}
                    alt=""
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default FilmCarousel1
