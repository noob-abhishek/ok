
import React from 'react'
import cardData from './cardData.json';

const data = [
  {
    "id": 1,
    "title": "Card 1",
    "description": "This is the description for Card 1",
    "imageUrl": "https://placekitten.com/200/300"
  },
  {
    "id": 2,
    "title": "Card 2",
    "description": "This is the description for Card 2",
    "imageUrl": "https://placekitten.com/200/301"
  },
  {
    "id": 3,
    "title": "Card 3",
    "description": "This is the description for Card 3",
    "imageUrl": "https://placekitten.com/200/302"
  }
]


const ServiceComponent = () => {
  return (
    <div>
      <h1>our Service</h1>
      <div >    
        {data.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ id, title, description, imageUrl }) =>{
return (
    <>
        <img src= {imageUrl}>  </img>

        <h3> {title}</h3>  .
        <p> {description}</p>
        <button> read moreeeeeeeeee</button>
    </>
)
}

export default ServiceComponent;
