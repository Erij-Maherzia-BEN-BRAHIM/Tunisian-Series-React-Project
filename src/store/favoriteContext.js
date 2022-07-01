import { createContext, useState } from "react";

export const FavContext=createContext(
    {
    listeDesFavories:[],
    nbFavorites:0,
    isFavorite:()=>{},
    addToFavorite:()=>{},
    removeFromFavorite:()=>{}  
}
)

function FavoritesContextProvider(props){
    const [tabFavorites,setTabFavorites]=useState([])
    function addToFavorite(serie){
setTabFavorites((prev)=>{
    return [...prev, serie]
})
    }
    function removeFromFavorite(id){
        setTabFavorites(()=>{
            return tabFavorites.filter((f)=>f.id !==id)
        })
    }
    function isFavorite(id){
        return tabFavorites.some((f)=>f.id===id)
    }
    const context={
        listeDesFavories:tabFavorites,
        nbFavorites:tabFavorites.length ,
        isFavorite:isFavorite,
        addToFavorite:addToFavorite,
        removeFromFavorite:removeFromFavorite  
    }
    return(
<FavContext.Provider value={context}>
    {props.children}
</FavContext.Provider>
    )
}
export default FavoritesContextProvider