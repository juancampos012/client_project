import React, { useEffect, useState } from 'react';
import { Card } from "antd";
import "./MyFirstComponents.scss"

export const MyFirstComponents = () => {
  const [card_content, setCardContent] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(data => {
        Promise.all(data.results.map(pokemon => 
            fetch(pokemon.url)
            .then(response => response.json())
            .then(pokemonData => ({
                title: pokemonData.name,
                size: "small",
                //<html>
                    //<head></head>
                    //<body>
                      //<a href='#'>Ver más</a>
                    //</body>
                  //</html>
                cover: <img src= {pokemonData.sprites.front_shiny} alt={`Imagen de ${pokemonData.name}`} className='img-style'></img>,
                abilities: pokemonData.abilities
            }))
        ))
        .then(newCardContent => setCardContent(newCardContent));
    })
  }, []);
  return (
    <>
    <div className="card-content">
        {card_content.map((card) => {
          return (
            <Card
              key={card.title}
              className="card-style"
              hoverable
              title={card.title}
              size={card.size}
              cover={card.cover}
            >
              <div>
                <p>Habilidades:</p>
                <ul className='ul-style'>
                  {card.abilities.map((abilityObj) => (
                    <li key={abilityObj.ability.name}>{abilityObj.ability.name}</li>
                  ))}
                </ul>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

