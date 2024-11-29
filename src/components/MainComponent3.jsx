import { Component } from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'

class FilmCarousel3 extends Component {
  state = {
    films3: [],
  }

  fetchFilms3 = () => {
    fetch('http://www.omdbapi.com/?apikey=47ad4fc&s=natale')
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        } else {
          throw new Error('Errore nella chiamata')
        }
      })
      .then((data) => {
        this.setState({
          films3: data.Search,
        })
      })
      .catch((e) => {
        console.log('Errore!', e)
      })
  }

  componentDidMount() {
    this.fetchFilms3()
  }

  render() {
    const { films3 } = this.state

    return (
      <div className="bg-container">
        <h1 className="text-white text-start">Cinepanettoni</h1>
        <Carousel interval={null}>
          <Carousel.Item>
            <Row>
              {films3.slice(0, 6).map((film) => (
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
                    alt="Spider-Man"
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              {films3.slice(6, 12).map((film) => (
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
        </Carousel>
      </div>
    )
  }
}

export default FilmCarousel3
