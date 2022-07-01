import React, { useContext } from 'react'
import { FavContext } from './../store/favoriteContext';
import SeriesList from './../components/SeriesList';

export default function Favorites() {
  const favC= useContext(FavContext)
  return (
    <div>
{favC.nbFavorites===0 ?  <h1>You don't have any favorite film</h1>: <SeriesList listOfSeries={favC.listeDesFavories} ></SeriesList> }
                </div>
  )
}
