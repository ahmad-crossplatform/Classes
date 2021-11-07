enum App {
    MainText= 'app-main-text' 
}

enum Screen1  {
    MainText= 'screen1-main-text',
    Button= 'screen1-button'
}

export const tokens = {
    screens: {
        app: App, 
        screen1: Screen1,
    }
}