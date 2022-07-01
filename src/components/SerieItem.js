import React, { useContext } from "react";
import Card from "./Card";
import styles from './SerieItem.module.css';
import { FavContext } from './../store/favoriteContext';

export default function SerieItem(props) {
  const FavC=useContext(FavContext)
  function favHandler(){
if(!FavC.isFavorite(props.oneSerie.id)){
FavC.addToFavorite(props.oneSerie)
}else{
FavC.removeFromFavorite(props.oneSerie.id)
}
  }
  return (
    <Card>
 <div className={styles.item}>
                <div className={styles.image}>
                    <img src={props.oneSerie.cover} alt="cover Serie"></img>
                </div>
                <div className={styles.content}>
                    <h3> {props.oneSerie.title}
                    </h3>
                    <strong> {props.oneSerie.year} </strong>
                    <p> {props.oneSerie.description} </p>

                </div>
                <div className={styles.actions}>
                    <button onClick={favHandler}>{FavC.isFavorite(props.oneSerie.id)?'Remove From Favorite':'Add To Favorite'}</button>
                </div>
      </div>
    </Card>
  );
}
