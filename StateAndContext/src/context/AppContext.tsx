/* 1. ContextProvider 
 Context
 */  

 import React from 'react'

interface IAppContext {
    simpleText : string ;
    setSimpleText : (text : string ) => void ; 
}
export const AppContext = React.createContext<IAppContext|undefined>(undefined);

export const AppContextProvider: React.FC = (props) => {
    const [simpleText, setSimpleText] = React.useState('')
    setTimeout(function(){
        console.log('T2: ', setSimpleText(new Date().toTimeString()) );
    }, 1000);
    return (
        <AppContext.Provider value={{
             simpleText, 
             setSimpleText
        }}>
            {props.children}
        </AppContext.Provider>
    ); 
}