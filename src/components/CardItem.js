import React from 'react'

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__info">
          <img src={props.src} alt="img" className="cards__item__img" />
          <div className="cards__item__contact">
            <h1 className="card__item__name">{props.name}</h1>
            <h2 className="card__item__ig">{props.ig}</h2>
          </div>
        </div>
        <div className="card__item__about">
          <h3 className="cards__item__bio">
            {props.bio}
          </h3>
          <div className="card__item__gallery">
          </div>
          <button>
            Book Now 
          </button>
        </div>
      </li>
    </>
  )
}

export default CardItem