import { Component } from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'

class FilmCarousel1 extends Component {
  state = {
    films1: [],
  }

  fetchFilms1 = () => {
    fetch('http://www.omdbapi.com/?apikey=47ad4fc&s=naruto')
      .then((resp) => {
        console.log(resp)
        if (resp.ok) {
          return resp.json()
        } else {
          throw new Error('Errore nella chiamata')
        }
      })
      .then((data) => {
        console.log(data)
        this.setState({
          films1: data.Search,
        })
      })
      .catch((e) => {
        console.log('Errore!', e)
      })
  }

  componentDidMount() {
    this.fetchFilms1()
  }

  render() {
    const { films1 } = this.state
    const chunks = []

    for (let i = 0; i < films1.length; i += 6) {
      chunks.push(films1.slice(i, i + 6))
    }

    return (
      <div className="bg-container">
        <h1 className="text-white text-start">Naruto saga</h1>
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
                      alt="Animation Movie"
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
}

export default FilmCarousel1
