import React, { useContext } from "react"
import ViewStyled from "./MainContainer.styled"
import { ThemeContext } from "../../../hooks/context/Theme.context"


const MainContainer = (props) => {

    
    const { theme } = useContext(ThemeContext)

    return <ViewStyled backgroundColor={theme.backgroundColor}>
        {props.children}
    </ViewStyled>

}

export default MainContainer