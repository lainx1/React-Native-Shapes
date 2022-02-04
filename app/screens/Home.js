import React, { useContext } from "react";
import MiddleMoonTopContainer from "../components/container/middlemoontopcontainer/MiddleMoonTopContainer";
import Button from "../components/button/Button";
import { ThemeContext } from "../hooks/context/Theme.context";
import { ThemeLight, ThemeDark } from "../resources/themes/themes";

const Home = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    

    return <MiddleMoonTopContainer>
        <Button url="https://www.google.com.mx">Boton link que lleva a google</Button>
        <Button isPrimary={false}>Boton secoundario</Button>
        <Button onPress={() => {
            setTheme(theme.name === "light" ? ThemeDark : ThemeLight)
        }}>Cambiar tema</Button>
    </MiddleMoonTopContainer>
}

export default Home