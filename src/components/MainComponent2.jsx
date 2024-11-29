import { Component } from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'

class FilmCarousel2 extends Component {
  state = {
    films2: [],
  }

  fetchFilms2 = () => {
    fetch('http://www.omdbapi.com/?apikey=47ad4fc&s=pokemon')
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        } else {
          throw new Error('Errore nella chiamata')
        }
      })
      .then((data) => {
        this.setState({
          films2: data.Search,
        })
      })
      .catch((e) => {
        console.log('Errore!', e)
      })
  }

  componentDidMount() {
    this.fetchFilms2()
  }

  render() {
    const { films2 } = this.state

    return (
      <div className="bg-container">
        <h1 className="text-white text-start">Pokèmon Saga</h1>
        <Carousel interval={null}>
          <Carousel.Item>
            <Row>
              {films2.slice(0, 6).map((film) => (
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
              {films2.slice(6, 12).map((film) => (
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
        </Carousel>
      </div>
    )
  }
}

export default FilmCarousel2
