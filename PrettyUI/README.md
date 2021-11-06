# Fonts
1. If it is not installed already make sure to have   `expo-font` installed in your packages. 

2. Download the fonts you need and place them inside "assets/fonts" 
3.    
```ts
import { useFonts } from 'expo-font';

/// some code 

const LoginScreen = () => {
    const [fontsLoaded] = useFonts({'Roboto-BoldItalic':require('../../assets/fonts/Roboto-BoldItalic.ttf')})
    return (
      <SafeAreaView style={styles.container}>
            
      <View >
         {fontsLoaded &&  <Text style={styles.text}>Some Text</Text>}     
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    },
     buttonText:{
      color:'white',
      fontWeight:'bold', 
      fontSize:18,
      fontFamily:'Roboto-BoldItalic'
    }
  
  });
```


# Icon
`@expo/vector-icons` is already installed with the expo init 

You can browse supported icons from the following link: https://icons.expo.fyi/

```typescript
import {MaterialIcons} from '@expo/vector-icons'

const SomeComponent = () => {
    return (          
      <View >
        <MaterialIcons name="arrow-forward-ios" size={22} color='white'/>
      </View>
    )
}
```

# SVG
1. place the svg inside you assets folder
1. `expo install react-native-svg`
2. `yarn add --dev react-native-svg-transformer`
2. In root folder create `metro.config.js`
```js
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();
```
5. As we are working with typescript we need to add a declaration file. Create `declarations.d.ts` and place it anywhere in source folder. Write the following inside it.
```ts
declare module "*.svg" {
    import React from 'react';
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}
```

6. Now you can import the svg as a component 

```ts
import Logo from "../../assets/logo.svg";
const SomeComponent = () => {
    return (          
      <View >
           <Logo width={300} height={300}/>
      </View>
    )
}
```