import React from 'react'
import SerieItem from './SerieItem'

export default function SeriesList(props) {
  return (
    <div>
        <ul>
            {props.listOfSeries.map((s)=>{
                return <SerieItem oneSerie={s}  ></SerieItem>
            })}
        </ul>
    </div>
  )
}
