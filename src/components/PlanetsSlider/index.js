import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="slider-container" data-testid="planets">
      <div className="container">
        <h1 className="heading">PlANETS</h1>

        <Slider>
          {planetsList.map(eachItem => (
            <PlanetItem planetDetails={eachItem} key={eachItem.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
