import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import CardCarList from "../../cars/components/CardCarList"
import Experience from "../components/Experience"
import cars from "../../../../../public/data/cars.json"
import "../../../../styles/Home.css"

const Home = () => {

const featuredCars = cars.filter((car) => car.featured).slice(0, 3);

  return (
    <div className="home">
      <Hero />
 
      <section className="featured">
        <div className="container featured__header">
          <div>
            <p className="eyebrow">Selección destacada</p>
 
            <h2 className="featured__title">Conozca la colección</h2>
          </div>
 
          <Link className="text-link featured__link" to="/cars">Ver todos los autos →</Link>
        </div>
 
        <div className="container">
          <CardCarList cars={featuredCars} />
        </div>
 
        <Experience />
      </section>
    </div>
  )
}

export default Home
