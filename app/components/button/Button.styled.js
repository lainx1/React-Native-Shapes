import styled from "styled-components/native"

const ButtonStyled = styled.TouchableOpacity`
    margin  : 10px;
    background-color: ${props => props.color || "springgreen"};
    padding: 10px;
    border-radius: 10px;
    border-color: white;
    border-width: 1px;
`
const TextButtonStyled = styled.Text`
    text-align: center;
    color: ${props => props.color || "red"};;
`

export { ButtonStyled, TextButtonStyled }