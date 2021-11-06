# UseState and UseContext 
Two of the most modern, common and easy apis for State management. They can easily replace the need of REDUX 

## UseState 
This is an api to add states  to functional components without compromising performance nor the need to create class to use the state. 

## useContext 
React Context is used to manage global states (i.e. states which are used by multiple components. )

React Context consists of three parts: 
1. Context: Which is an object that contains states and setters 
2. Context Provider: Which is a component that provides the contexts to the rest of the app. The provider should wrap the whole app in order to provide it with context . 
3. Context Consumer: Which is every component that consumes the context and with hooks this is done with `useContexts(AppContext)` where `AppContext` is the context created. 


This is how you create a context and a context provider in typescript
```ts
interface IMapContext {
  destination?: LatLng;
  clearDestination: () => void;
  setDestination: (dest: LatLng) => void;
}
export const MapContext = React.createContext<IMapContext>({
  clearDestination: () => {},
  setDestination: () => {},
});

export const MapContextProvider: React.FC = (props) => { //adding React.FC adds 'children' as a property to props. 
  const [destination, setDestination] = useState<LatLng>();

  const clearDestination = () => {
    console.log('CLEARING DESTINATION');
    setDestination(undefined);
  };

  return (
    <MapContext.Provider
      value={{destination, clearDestination, setDestination}}>
      {props.children} //children property gives a component the ability wrap other components. 
    </MapContext.Provider>
  );
};

```

Then you wrap the provider around the app like the following 

```ts

const  App:React.FC = () =><AppContextProvider>
                              <Screen1/>
                          </AppContextProvider> 

export default App
```

Then you consume it in any component like the following 

```ts
export const Screen1 = () => {
  const context = useContext(AppContext)
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text>The timer below is coming from context</Text>
        <Text style={{textAlign:'center'}}>{context?.simpleText}</Text>
      </View>
    </SafeAreaView>
    )
}

```