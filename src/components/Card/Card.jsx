import style from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card(props) {
   console.log(props);
   return (
      <div className={style.container}>
         <button onClick={() => props.onClose(props.id)} className={style.closeButton}>X</button>
         <Link>
         <img src={props.image} alt='Imagen' />
         <h2>Name: {props.name}</h2>
         <h4>Status: {props.status}</h4>
         <h4>Species: {props.species}</h4>
         <h4>Gender: {props.gender}</h4>
         <h4>Origin: {props.origin}</h4>
         </Link>
      </div>
   );
}
