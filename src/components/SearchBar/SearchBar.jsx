import style from "./SearchBar.module.css"
import { useState } from 'react';

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");
   const handleChange = e => {
      const {value} = e.target;
      console.log("Value: ", value);
      setCharacter(value);
   }

   return (
      <div className={style.bar}>
         <input type='search' 
         name="search"
         id="search"
         className={style.searchInput} 
         onChange={handleChange}
         />
         <button onClick={() => props.onSearch(character)} 
         className={style.searchButton}>
            Agregar
         </button>
      </div>
   );
}
