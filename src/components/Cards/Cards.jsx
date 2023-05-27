import Card from "../Card/Card.jsx"
import style from "./Cards.module.css"

export default function Cards({characters}) {
   // props = { characters=[---]}
   console.log(characters);
   return (
      <div className={style.cardsContainer}>
         {
            characters.map(character => (
               <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin?.name}
                  image={character.image}
                  onClose={() => alert('Emulamos que se cierra la card')}
               />
            ))
         }
      </div>
   );
}
