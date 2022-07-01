import { createContext, useState } from "react";

export const LoginContext= createContext({
    isLogged: false,
    seConnecter:()=>{},
    seDeconnecter:()=>{}
})
function LoginContextProvider(props){
const [auth, setAuth]=useState(false)
    function seConnecter(username, mdp){
        if(username==="erijb" && mdp==="azerty"){
            setAuth(true)
            return true
        }else{
            setAuth(false)
            return false
        }
    }
    function seDeconnecter(){
setAuth(false)
    }
    const context={
        isLogged: auth,
        seConnecter:seConnecter,
        seDeconnecter:seDeconnecter
    }
    return(
        <LoginContext.Provider value={context}>
            {props.children}
        </LoginContext.Provider>
    )
}
export default LoginContextProvider