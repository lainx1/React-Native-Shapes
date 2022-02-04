import React, { useContext } from "react";
import {ViewStyled,  LinearGradientStyled } from "./MiddleMoonTopContainer.styled";
import { ThemeContext } from "../../../hooks/context/Theme.context";

const MiddleMoonTopContainer = (props) => {

    const { theme } = useContext(ThemeContext)

    return <LinearGradientStyled color={theme.primaryColor}>
        <ViewStyled>{
            props.children
        }</ViewStyled>
    </LinearGradientStyled>


}

export default MiddleMoonTopContainer