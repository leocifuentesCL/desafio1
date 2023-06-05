import { Tags } from "./Tags"

export const Card = ({ titulo, text, foto, color, raza }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={foto} alt={titulo} />
        <div className="card-body">
            <h3 className="card-title">{titulo}</h3>
            <p className="card-text">{text}</p>
            <Tags textBadge={raza} colorBadge={color} />
        </div>
    </div>
  )
}
