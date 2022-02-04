import { Colors } from "react-native/Libraries/NewAppScreen"

const ThemeLight = {
    name: "light",
    primaryColor: "#4E488F",
    textColorLight: "white",
    textColor: "black",
    backgroundColor: Colors.lighter

}

const ThemeDark = {
    name: "dark",
    primaryColor: "#9c27b0",
    textColorLight: "white",
    textColor: "white",
    backgroundColor: Colors.darker
}

export { ThemeLight, ThemeDark }