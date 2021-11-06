import React from 'react';
import { AppContextProvider } from './src/context/AppContext';
import { Screen1 } from './src/screens/Screen1/Screen1';

const  App:React.FC = () =><AppContextProvider>
                              <Screen1/>
                          </AppContextProvider> 

export default App