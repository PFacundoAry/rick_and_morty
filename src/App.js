import { useState } from 'react';
import axios from 'axios';
import style from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import { Routes, Route } from "react-router-dom"
// import characters from './data.js';

function App() {

   const [characters, setCharacters] = useState([]);

   // const example = {
   //    id: 1,
   //    name: 'Rick Sanchez',
   //    status: 'Alive',
   //    species: 'Human',
   //    gender: 'Male',
   //    origin: {
   //       name: 'Earth (C-137)',
   //       url: 'https://rickandmortyapi.com/api/location/1',
   //    },
   //    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   // };

   const onSearch = id => { // 2 => { id: 2 }
      axios (`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            // console.log(data);
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }

   const onClose = id => {
      setCharacters(characters.filter(caracter =>
         caracter.id !== Number(id)))
   }

   return (

      <div className='App'>
         <div className={style.nav}>
            <NavBar onSearch = {onSearch}/>
         </div>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
