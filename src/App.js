import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './Cards'; 
import CardData from './CardData'; 
function App() {
  const cardData = CardData();

  return (
    <div className="container text-center mt-5">
      <div className="row">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            birthdate={card.birthdate}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
