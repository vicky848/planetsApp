// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props

  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-list-container">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="name-heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
