import NetflixNavbar from './components/MyNav'
import Footer from './components/MyFooter'
import TVShowsHeader from './components/SubNav'
import './App.css'
import FilmCarousel1 from './components/MainComponent1.jsx'
import FilmCarousel2 from './components/MainComponent2.jsx'
import FilmCarousel3 from './components/MainComponent3.jsx'

function App() {
  return (
    <div>
      <header>
        <NetflixNavbar />
      </header>
      <main>
        <TVShowsHeader />

        <FilmCarousel1 />
        <FilmCarousel2 />
        <FilmCarousel3 />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
