# Localization

Localization is the process of getting strings in the right language depending on the selected locale.

1. `expo install expo-localization`
2. `yarn add i18n-js`
3. `yarn add --dev @types/i18n-js `
4. Create a folder, which can be inside helpers folder, for translations. I will call it `translation`

In Expo Documentation, a simplified way is provided to use this library. However the more sentences the app has the more complicated it might get, also it would be hard to remember which strings should we get the translations from.

The method presented here is inspired but this [great article](https://medium.com/swlh/translating-your-react-native-app-with-i18n-js-expo-localization-4f6866090e5a).

The idea is to have the translation centralized for each language in one file, and to identify all the translatable texts and place them in one place so they will be used for translation.

5. identify all pages and their text and export them inside a token as follows

```ts
enum App {
  MainText = "app-main-text",
}

enum Screen1 {
  MainText = "screen1-main-text",
  Button = "screen1-button",
}

export const tokens = {
  screens: {
    app: App,
    screen1: Screen1,
  },
};
```

6. Create translation files and add the translations (remember it is a file for each language) . The best way is to have all translations for the default language and then when it is done you can copy that file and put the right translation for the second language.

```ts
// en.ts

import { tokens } from "./appStructure";
export const english = {
  [tokens.screens.app.MainText]: "Welcome To My App",

  [tokens.screens.screen1.MainText]: "This is from Component",
  [tokens.screens.screen1.Button]: "Click Here",
};
```

```ts
// sv.ts

import { tokens } from "./appStructure";
export const swedish = {
  [tokens.screens.app.MainText]: "Välkommen till min app!",

  //Notice that we missed to translate one line, in this case it should fall back to english.
  [tokens.screens.screen1.Button]: "Tryck här",
};
```

3. Create a file to config the localization as below

```ts
import * as Localization from "expo-localization";
import i18n from "i18n-js";

import { english } from "./en";
import { swedish } from "./sv";

export const translate = (key: string) => i18n.t(key);

const getLocale = () => {
  return Localization.locale.slice(0, 2); //to overcome the difference between ios and android returned locale.
};
export const setI18nConfig = () => {
  i18n.translations = { en: english, sv: swedish };
  i18n.fallbacks = true;
  i18n.locale = getLocale();
};
```

8. Initialize the config by calling `setI18nConfig` in early stages of the app.

```ts

export default function App() {
  setI18nConfig();

  return (
    <View style={styles.container}>
  /*rest of code*/
```

9. Place the translations where texts should belong by calling `translate(ID FROM TOKEN FROM AppStructure)`

```ts
const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text>{translate(tokens.screens.screen1.MainText)}</Text>
      <TouchableOpacity>
        <Text>{translate(tokens.screens.screen1.Button)}</Text>
      </TouchableOpacity>
    </View>
  );
};
```
