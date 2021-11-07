import { tokens } from "./appStructure";
export const swedish = {
    [tokens.screens.app.MainText]:"Välkommen till min app!",

    //Notice that we missed to translate one line, in this case it should fall back to english. 
    [tokens.screens.screen1.Button]: "Tryck här"
};