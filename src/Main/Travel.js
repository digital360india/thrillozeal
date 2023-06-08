import React from 'react'
import './Travel.css'
import { useHistory } from 'react-router-dom';

const Travel = () => {

  const data = [
    {
      "style": "Couples",
      "img": "./Images/couples.png",
    },
    {
      "style": "Friends",
      "img": "./Images/friends.png",
    },
    {
      "style": "Family",
      "img": "./Images/family.png",
    },
    {
      "style": "Solo",
      "img": "./Images/solo.png",
    },
    {
      "style": "Corporate",
      "img": "./Images/coorporate.png",
    },
    {
      "style": "School Trips",
      "img": "./Images/school.png",
    },
    {
      "style": "Workation",
      "img": "./Images/work.png",
    },
    {
      "style": "Bike Trips",
      "img": "./Images/bike.png",
    },
  ]

  const history = useHistory();

  const goToLocation = (sty) => {
    history.push(`/All_Location/All_Activities/${sty}`)
  }

  return (
    <div className="Travel-Container">
      <div className="flex-destination">
        <div className="second_header">
          <img src='/Images/progess.png' alt="" />
          Travel Style
        </div>
      </div>

      <div className="travel-img-container">

        {data?.map((data) => (
        <div onClick={() => goToLocation(data.style)}>
          <div className="column">
            <img src={data?.img}></img>
            <p>{data?.style}</p>
          </div>
        </div>
        ))}

      </div>
    </div>
  )
}

export default Travel