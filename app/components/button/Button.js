import React, { useContext } from "react"
import { Linking } from "react-native"
import { ButtonStyled, TextButtonStyled } from "./Button.styled"
// import ButtonLinkStyled from "./ButtonLink.styled"
import { ThemeContext } from "../../hooks/context/Theme.context"

const Button = (props) => {

    const {
        text = undefined,
        isPrimary = false,
        url = undefined,
        onPress = () => { }
    } = props

    const { theme } = useContext(ThemeContext)



    return <ButtonStyled onPress={url ? () => { Linking.openURL(url) } : onPress} color={isPrimary === true ? theme.primaryColor : theme.backgroundColor}>
        <TextButtonStyled color={isPrimary === true ? theme.textColorLight : theme.textColor}>{text || props.children}</TextButtonStyled>
    </ButtonStyled>

}

export default Button