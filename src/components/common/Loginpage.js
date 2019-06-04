import React from 'react'
import { Link } from 'react-router-dom'

const Loginpage = () => {
  return (
    <section>
      <div className="hero is-fullheight">
        <div className="hero-body hero-image" style={{ backgroundImage: 'url(images/asia.jpg)' }}>
          <div className="container">
            <div>
              <h1 className="title2">Find your perfect cruise.</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="hero is-medium">
        <div className="hero-body hero-image" style={{ backgroundImage: 'url(http://www.mundomarcruceros.com/img/Fotos-Landing/Asia-1600x650.jpg)' }}>
          <div className="container">
            <div>
              <h1 className="title2">Travel Inspiration</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="imagesLoginpage columns">
        <Link to={'/cruises'} className="column is-one-quarter">
          <figure className="image is-square">
            <img src="images/route.jpg" alt="route" />
          </figure>
        </Link>
        <Link to={'/categories'} className="column is-one-quarter">
          <figure className="image is-square">
            <img src="https://www.royalcaribbean.co.uk/assets/images/holiday-destinations/region-module/rccl_regionModule9.jpg" alt="route" />
          </figure>
        </Link>
        <Link to={'/ships'} className="column is-one-quarter">
          <figure className="image is-square">
            <img src="https://images.cruisecritic.com/image/5441/image_1000x_43.jpg" alt="route" />
          </figure>
        </Link>
        <Link to={'/cities'} className="column is-one-quarter">
          <figure className="image is-square">
            <img src="images/sign.jpg" alt="route" />
          </figure>
        </Link>
      </div>
    </section>
  )
}

export default Loginpage
